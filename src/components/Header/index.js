// components/Header.js
import { Box, Heading, Flex, Link, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" p={4} color="black" boxShadow="md">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          {/* Add your logo component or image here */}
          <Box as="span" fontSize="2xl" fontWeight="bold" marginRight="2">
            <Image src="/assets/icons/logo.svg" height={20} width={20} alt="logo" />
          </Box>
          <Heading as="h1" size="md">
            Br@in
          </Heading>
        </Flex>
        <Flex align="center">
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onOpen}
            variant="ghost"
          />
          {/* Display the navigation links on larger screens */}
          <Flex display={{ base: "none", md: "flex" }} align="center">
            <Link mr={4}>Home</Link>
            <Link mr={4}>About</Link>
            <Link mr={4}>Contact</Link>
            <Link mr={4}>Privacy</Link>
            <Link mr={4}>Terms</Link>
            <NextLink href="/login">
              <Button
                colorScheme="whiteAlpha"
                bg="black"
                color="white"
                borderRadius={20}
                _hover={{
                  bg: "white",
                  color: "black",
                  border: "1px solid black",
                }}
                boxShadow="md"
              >
                Login
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>Br@in</DrawerHeader>
            <DrawerBody>
              <Flex direction="column">
                <Link mb={2} onClick={onClose}>
                  Home
                </Link>
                <Link mb={2} onClick={onClose}>
                  About
                </Link>
                <Link mb={2} onClick={onClose}>
                  Contact
                </Link>
                <Link mb={2} onClick={onClose}>
                  Privacy
                </Link>
                <Link mb={2} onClick={onClose}>
                  Terms
                </Link>
                <NextLink href="/login">
                  <Button
                    colorScheme="whiteAlpha"
                    bg="black"
                    color="white"
                    borderRadius={20}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid black",
                    }}
                    boxShadow="md"
                    onClick={onClose}
                  >
                    Login
                  </Button>
                </NextLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
