'use client'
import IconBox from "@/components/Icons/IconBox";
import MiniStatistics from "@/components/card/MiniStatistics";
import { Box, Flex, Grid, GridItem, Icon, Image, Link, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy } from "react-icons/md";
import Card from '@/components/card/Card';
import alpaca from "@/services/alpaca";
import { format } from "date-fns";
import { COLLECTIONS, db } from "@/firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthContext } from "@/contexts/AuthContext";

export default function Page() {

  const [news, setNews] = useState([])
  const [userPortfolio, setUserPortfolio] = useState({
    botAssetValue: 0,
    investedAmount: 0,
    botCount: 0
  })

  const { user } = useAuthContext()

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  useEffect(() => {
    const fetchNews = async () => {
      let _news = await alpaca.getNews({ totalLimit: 20 }, alpaca.configuration)
      setNews(_news)
    }
    const fetchData = async () => {
      try {
        // Reference to the bots collection
        const botsCollectionRef = collection(db, COLLECTIONS.BOTS);

        // Query to fetch data for the specified user ID
        const q = query(botsCollectionRef, where("userId", "==", user.uid));

        const docSnap = await getDocs(q);

        const data = []
        docSnap.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() })
        });

        const botAssetValue = data.reduce((accumulator, currentValue) => {
          return accumulator + (currentValue.botAssetValue || 0); // Assuming botAssetValue is a numeric value
        }, 0);

        const investedAmount = data.reduce((accumulator, currentValue) => {
          return accumulator + (currentValue.inicialBalance || 0); // Assuming botAssetValue is a numeric value
        }, 0);


        setUserPortfolio({botAssetValue, investedAmount, botCount: data.length})


      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
    fetchNews()
  }, [])


  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, '2xl': 4 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Earnings"
          value={`$ ${(userPortfolio.botAssetValue - userPortfolio.investedAmount).toFixed(2)}`}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Total Invested"
          value={`$ ${userPortfolio.investedAmount}`}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="28px" h="28px" as={MdAddTask} color={brandColor} />}
            />
          }
          name="Bots Running"
          value={userPortfolio.botCount}
        />
      </SimpleGrid>
      <Text color={'secondaryGray.900'} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%' mt={5}>
        News
      </Text>
      {
        news.map(x => <Card flexDirection='column' w='100%' p={5} mt={5}>

          <Grid flexDirection={"column"} templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(12, 1fr)']}>
            <GridItem colSpan={1}>{x?.Images?.length !== 0 &&
              <Image src={x.Images[2].url} height={100} width={100} borderRadius={20} />
            }
            </GridItem>
            <GridItem justifyContent='space-between' colSpan={x?.Images?.length !== 0 ? 11 : 12} pl={2}>
              <Text color={'secondaryGray.900'} fontSize='16px' mb="4px" fontWeight='700' lineHeight='100%' >
                {x.Headline}
              </Text>

              <Text color={'secondaryGray.500'} fontSize='14px' mb="4px" fontWeight='700' lineHeight='100%' mt={2}>
                {x.Summary}
              </Text>
              <Link href={x.URL} target="__blank" color={"blueviolet"}>{x.URL}</Link>
              <Flex justifyContent='space-between'>
                <Text color={'secondaryGray.800'} fontSize='12px' mb="4px" fontWeight='700' lineHeight='100%' >
                  Author: {x.Author}
                </Text>
                <Text color={'secondaryGray.800'} fontSize='12px' mb="4px" fontWeight='700' lineHeight='100%' >
                  {format(x.UpdatedAt, 'MM/dd/yyyy HH:mm aa')}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Card>)
      }
    </Box>
  );
}
