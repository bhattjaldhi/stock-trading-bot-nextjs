'use client'
import PricingGrid from "@/components/PricingGrid";
import RootLayout from "@/layouts/RootLayout";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Page() {
    return <RootLayout>
        <Box display="flex" alignItems="center" flexDirection={'column'} minHeight="100vh" >
            <Box mt={[50, 70, 100]} mx="auto" width={'90%'} display={"flex"} alignItems={"center"}>
                <Box display={['none', 'block', 'block']} position="relative">
                    <Image src={'/assets/icons/pricing_icon_1.svg'} layout="responsive" height={200} width={200} objectFit="cover" alt="pricing_icon_2" />
                </Box>
                <Box textAlign="center" flex="1" ml={[0, 0, 4]}>
                    <Heading as="h2" size={{ base: 'xl', md: '2xl', lg: "3xl" }} mb={4}>
                        Pricing
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'md', lg: "lg" }} color="gray.600">
                        Free equity investments and flat ₹20 intraday and F&O trades even higher earning rates and our lowest borrowing rates.
                    </Text>
                </Box>
                <Box display={['none', 'block', 'block']} position="relative">
                    <Image src={'/assets/icons/pricing_icon_2.svg'} layout="responsive" height={200} width={200} objectFit="cover" alt="pricing_icon_2" />
                </Box>
            </Box>
            <Box my={[20, 20, 40]}>
                <PricingGrid />
            </Box>
        </Box>
    </RootLayout>
}
