import { PRICING } from "@/utils/constants";
import { Box, Button, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function PricingGrid({ onSelect }) {

    return <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(4, 1fr)']} gap={2} justifySelf="center" >
        <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
            <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                Basic
            </Heading>
            <Box p={6} px={"30px"}>
                <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"brand.500"}>
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
                <Button
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
                    onClick={() => onSelect(PRICING.basic.key)}
                >
                    Select plan
                </Button>
            </Box>
        </GridItem>
        <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
            <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                Pro
            </Heading>
            <Box p={6} px={"40px"}>
                <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"brand.500"}>
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
                <Button
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
                    onClick={() => onSelect(PRICING.pro.key)}
                >
                    Select plan
                </Button>
            </Box>
        </GridItem>
        <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
            <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                Max
            </Heading>
            <Box p={6} px={"30px"}>
                <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"brand.500"}>
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
                <Button
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
                    onClick={() => onSelect(PRICING.max.key)}
                >
                    Select plan
                </Button>
            </Box>
        </GridItem>
        <GridItem textAlign="center" borderRadius={20} borderWidth={1} bg="gray.100">
            <Heading as="h3" size={["md", "lg"]} py={4} mb={4} bg="#212326" color="white" borderTopRadius={10}>
                Ultra
            </Heading>
            <Box p={6} px={"30px"}>
                <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mt={2} color={"brand.500"}>
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
                <Button
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
                    onClick={() => onSelect(PRICING.ultra.key)}
                >
                    Select plan
                </Button>
            </Box>
        </GridItem>
    </Grid>
} 