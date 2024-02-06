'use client'
import IconBox from "@/components/Icons/IconBox";
import MiniStatistics from "@/components/card/MiniStatistics";
import { Box, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy } from "react-icons/md";

export default function Page() {

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');


  return (
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
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
            value="$350.4"
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
            value="$642.39"
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
            value="154"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
                }
              />
            }
            name="Total Projects"
            value="2935"
          />
        </SimpleGrid>
      </Box>
  );
}
