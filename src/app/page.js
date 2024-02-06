// pages/index.js
'use client'
import RootLayout from "@/layouts/RootLayout";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <RootLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <Box mt={[100, 150, 200]} mx="auto" width={["90%", "90%", "900px"]} position="relative" px={[4, 8, 12]}>
          <Box textAlign="center">
            <Heading as="h2"  size={{base: 'xl', md: '2xl', lg: "3xl"}} mb={4}>
              Build Wealth Automatically With Br@in
            </Heading>
            <Text fontSize={{base: 'sm', md: 'md', lg: "lg"}} color="gray.600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit
            </Text>
          </Box>
        </Box>
        <Button
          mt={6}
          borderRadius="20px"
          colorScheme={"brand"}
          px={[2, 4, 6]} // Responsive padding
          py={[2, 3, 4]}
        >
          Get Started
        </Button>
        <Box position="relative" width="100%" height={['200px', '400px', '900px']} mt={8} px={[4, 8, 12]}>
          <Image src="/assets/images/home_banner.png" layout="responsive" objectFit="cover" width={1500} height={500} alt="banner" />
        </Box>
        <Box position="relative" width="80%" height={['70px', '200px', '200px']} mt={8} display="flex" justifyContent="center" px={[4, 8, 12]}>
          <Image src="/assets/images/home_counter.png" layout="responsive" objectFit="cover" width={500} height={500} style={{ maxWidth: '1100px' }} alt="counter" />
        </Box>
        <Box position="relative" width="100%" mt={150} px={['30px', '50px', '200px']} >
          <Heading as="h2" size="xl" textAlign="center">
            Invest & Grow your cryptocurrency Portfolio
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
            gap={8}
            mt={8}
            px={[4, 8, 12]}
          >
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Heading as="h5" size={"md"}>
                  More than a typical crypto wallet
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet consect eturadipiscing eiusmod
                </Text>
                <Text fontSize="sm" color="brand.500" mt={3}>
                  Read More
                </Text>
                <Box display={'flex'} justifyContent={'center'}>
                  <Image src="/assets/images/home_portfolio_1.png" height={300} width={300} style={{ marginTop: 30 }} alt="portfolio_1" />
                </Box>
              </Box>

            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box display={'flex'} justifyContent={'center'}>
                  <Image src="/assets/images/home_portfolio_2.png" height={300} width={300} style={{ marginBottom: 30 }} alt="portfolio_2" />
                </Box>
                <Heading as="h5" size={"md"}>
                  Grow your business with Binance Pay
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet consectetur adipiscing eiusmod
                </Text>
                <Text fontSize="sm" color="brand.500" mt={3}>
                  Read More
                </Text>
              </Box>

            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Heading as="h5" size={"md"}>
                  A crypto wallet from the future
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet consect eturadipiscing eiusmod
                </Text>
                <Text fontSize="sm" color="brand.500" mt={3}>
                  Read More
                </Text>
                <Box display={'flex'} justifyContent={'center'}>
                  <Image src="/assets/images/home_portfolio_3.png" height={300} width={300} style={{ marginTop: 30 }} alt="portfolio_3" />
                </Box>
              </Box>

            </GridItem>
          </Grid>
          {/* Additional content goes here */}

        </Box>

        <Box position="relative" width="100%" mt={150} px={['30px', '50px', '200px']} py={10}>
          <Heading as="h2" size="xl" textAlign="center">
            Fully featured to buy, trade and invest in Cryptop
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
            gap={8}
            mt={8}
          >
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box>
                  <Image src="/assets/icons/home_features_1.svg" height={61} width={61} style={{ marginTop: 30 }} alt="feature_1" />
                </Box>
                <Heading as="h5" size={"md"} mt={5}>
                  Real-time trading
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={5}>
                  Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment.
                </Text>

              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box>
                  <Image src="/assets/icons/home_features_2.svg" height={61} width={61} style={{ marginTop: 30 }} alt="feature_2" />
                </Box>
                <Heading as="h5" size={"md"} mt={5}>
                  Easy to create wallet
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={5}>
                  Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment.
                </Text>

              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box>
                  <Image src="/assets/icons/home_features_3.svg" height={61} width={61} style={{ marginTop: 30 }} alt="feature_3" />
                </Box>
                <Heading as="h5" size={"md"} mt={5}>
                  Safe & secure
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={5}>
                  Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment.
                </Text>

              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box>
                  <Image src="/assets/icons/home_features_4.svg" height={61} width={61} style={{ marginTop: 30 }} alt="feature_4" />
                </Box>
                <Heading as="h5" size={"md"} mt={5}>
                  Super Fast KYC
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={5}>
                  Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment.
                </Text>

              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box>
                  <Image src="/assets/icons/home_features_5.svg" height={61} width={61} style={{ marginTop: 30 }} alt="feature_5" />
                </Box>
                <Heading as="h5" size={"md"} mt={5}>
                  Send & receive anytime
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={5}>
                  Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment.
                </Text>

              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                width="100%"
                background="#F3F3F3"
                display={"flex"}
                flexDirection={"column"}
                padding={['50px', '100px', '50px']}
                borderRadius={20}
              >
                <Box>
                  <Image src="/assets/icons/home_features_6.svg" height={61} width={61} style={{ marginTop: 30 }} alt="feature_6" />
                </Box>
                <Heading as="h5" size={"md"} mt={5}>
                  Reports & analytics
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={5}>
                  Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment.
                </Text>
              </Box>
            </GridItem>
          </Grid>
          <Box display={'flex'} mt={6}>
            <Button

              borderRadius="20px"
              colorScheme={"brand"}
              bgGradient={'linear(to-r, brand.500, primary.600)'}
              px={[2, 4, 6]}
              py={[2, 3, 4]}
            >
              Get Started
            </Button>
            <Button borderRadius="20px"
              ml={5}
              px={[2, 4, 6]}
              py={[2, 3, 4]}>
              View More
            </Button>
          </Box>
        </Box>
      </Box>
    </RootLayout>
  );
};

export default Home;
