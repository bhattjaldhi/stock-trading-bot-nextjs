'use client'
import RootLayout from "@/layouts/RootLayout";
import { Box, Button, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return <RootLayout>
        <Box display="flex" alignItems="center" flexDirection={'column'} width="100%" minHeight="100vh">
            <Box mt={[50, 70, 100]} mx="auto" width={'90%'} px={[4, 8, 12]} display={"flex"} alignItems={"center"}>
                <Box display={['none', 'block', 'block']} width={200} height={200} position="relative">
                    <Image src={'/assets/icons/pricing_icon_1.svg'} layout="fill" objectFit="cover" alt="pricing_icon_1" />
                </Box>
                <Box textAlign="center" flex="1" ml={[0, 0, 4]}>
                    <Heading as="h2" size={{ base: 'xl', md: '2xl', lg: "3xl" }} mb={4}>
                        Pricing
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'md', lg: "lg" }} color="gray.600">
                        Free equity investments and flat ₹20 intraday and F&O trades even higher earning rates and our lowest borrowing rates.
                    </Text>
                </Box>
                <Box display={['none', 'block', 'block']} width={234} height={234} position="relative">
                    <Image src={'/assets/icons/pricing_icon_2.svg'} layout="fill" objectFit="cover" alt="pricing_icon_2" />
                </Box>
            </Box>
            <Grid templateColumns={['1fr', '1fr', 'repeat(4, 1fr)']} gap={2} width="70%" justifySelf="center" my={[20, 20, 40]}>
                <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
                    <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                        Free
                    </Heading>
                    <Box p={6} px={"30px"}>
                        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"primary.500"}>
                            $ 0
                        </Text>
                        <Text>Per month</Text>
                        <Divider mt={10} borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}> 1 Trading bot</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>10+ Stocks</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>5% fees on withdrawls</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>Community Support</Text>
                        <Link href="/register?plan=free">
                            <Text
                                mt={10}
                                borderRadius={20}
                                px={10}
                                py={2}
                                style={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",
                                }}
                                _hover={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",
                                }}
                                color="white"
                            >
                                Get Started
                            </Text>
                        </Link>
                    </Box>
                </GridItem>
                <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
                    <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                        Pro
                    </Heading>
                    <Box p={6} px={"40px"}>
                        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"primary.500"}>
                            $ 9.99
                        </Text>
                        <Text>Per month</Text>
                        <Divider mt={10} borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}> 3 Trading bots</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>30+ Stocks</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>3% fees on withdrawls</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>Community Support</Text>
                        <Link href="/register?plan=pro">
                            <Text
                                mt={10}
                                borderRadius={20}
                                px={10}
                                py={2}
                                style={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",

                                }}
                                _hover={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",
                                }}
                                color="white"
                            >
                                Get Started
                            </Text>
                        </Link>
                    </Box>
                </GridItem>
                <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
                    <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                        Max
                    </Heading>
                    <Box p={6} px={"30px"}>
                        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"primary.500"}>
                            $ 19.99
                        </Text>
                        <Text>Per month</Text>
                        <Divider mt={10} borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}> 5 Trading bots</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>50+ Stocks</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>1% fees on withdrawls</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>24 x 7 Support</Text>
                        <Link href="/register?plan=max">
                            <Text
                                mt={10}
                                borderRadius={20}
                                px={10}
                                py={2}
                                style={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",

                                }}
                                _hover={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",
                                }}
                                color="white"
                            >
                                Get Started
                            </Text>
                        </Link>
                    </Box>
                </GridItem>
                <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
                    <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                        Ultra
                    </Heading>
                    <Box p={6} px={"30px"}>
                        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"primary.500"}>
                            $ 29.99
                        </Text>
                        <Text>Per month</Text>
                        <Divider mt={10} borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}> Unlimited trading bots</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>Unlimited Stocks</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>No fees on withdrawls</Text>
                        <Divider borderColor="gray.200" />
                        <Text fontSize="sm" color={"gray.250"} my={3}>24 x 7 Support</Text>
                        <Link href="/register?plan=ultra">
                            <Text
                                mt={10}
                                borderRadius={20}
                                px={10}
                                py={2}
                                style={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",

                                }}
                                _hover={{
                                    background: "linear-gradient(278.04deg, #25F6FF -22.6%, #7782FF 54.64%, #FF5196 117.68%)",
                                }}
                                color="white"
                            >
                                Get Started
                            </Text>
                        </Link>
                    </Box>
                </GridItem>
            </Grid>

        </Box>
    </RootLayout>
}
