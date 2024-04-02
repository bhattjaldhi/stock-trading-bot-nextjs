'use client'
import alpaca from "@/services/alpaca";
import { Box, Flex, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import moment from "moment";
import StockDailyLineChart from "@/views/user/charts/StockDailyLineChart";
import Card from '@/components/card/Card';
import { format } from "date-fns";


export default function Page({ params, ...rest }) {

    const [lines, setLines] = useState([])
    const [news, setNews] = useState([])
    const [latestQuote, setLatestQuote] = useState(undefined)

    useEffect(() => {
        const fetchBars = async () => {
            //Get daily price data for AAPL over the last 7 days.
            let bars = alpaca.getBarsV2(
                params.symbol,
                {
                    start: moment().subtract(365, "days").format(),
                    end: moment().subtract(20, "minutes").format(),
                    timeframe: "1Day",
                },
                alpaca.configuration
            );
            const barset = [{ name: 'Close price', data: [] }];
            for await (let b of bars) {
                barset[0].data.push({ x: b.Timestamp, y: b.ClosePrice });
            }
            setLines(barset)
        }

        const fetchNews = async () => {
            let _news = await alpaca.getNews({ symbols: [params.symbol] }, alpaca.configuration)
            setNews(_news)
        }

        const fetchLatestQuote = async () => {
            //Get daily price data for AAPL over the last 7 days.
            let latestQuote = await alpaca.getLatestQuote(
                params.symbol,
                alpaca.configuration
            );
            setLatestQuote(latestQuote)
        }

        fetchBars()
        fetchNews()
        fetchLatestQuote()
    }, [params.slug])

    return <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>

        <Card flexDirection='column' w='100%' p={5}>
            <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
                <Text color={'secondaryGray.900'} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%'>
                    {params.symbol}
                </Text>
                {latestQuote && <Text color={'secondaryGray.500'} fontSize='16px' mb="4px" fontWeight='700' lineHeight='100%'>
                    USD {latestQuote.AskPrice}
                </Text>}
            </Flex>
            <Flex p={5}>
                <StockDailyLineChart data={lines} />
            </Flex>
        </Card>

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
}