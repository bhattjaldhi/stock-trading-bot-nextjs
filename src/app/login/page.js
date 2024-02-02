'use client'
import RootLayout from "@/components/RootLayout";
import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default function Page() {
  return <RootLayout>
    <Box display="flex" alignItems="center" flexDirection={'column'} width="100%" height={"100vh"} bg="gray.50">
      <Heading as="h2" size="lg" textAlign={'center'} width={'100%'} mt={50}>Br@in</Heading>

      <Box width="100%" maxWidth={"600px"} bg="white" mt={50} borderRadius={20}>
        <form>
          <Heading as="h3" size="md" textAlign={'center'} width={'100%'} mt={20}>Sign In</Heading>
          <Box my={20} px={20}>
            <FormControl >
              <FormLabel>Email address</FormLabel>
              <Input type='email' placeholder={'Enter Email'} />
            </FormControl>
            <FormControl mt={7}>
              <FormLabel>Password</FormLabel>
              <PasswordInput />
            </FormControl>
            <Link href="/forgot-password">
              <Text color={"primary.500"} fontSize={'sm'} mt={7}>Forgot Password?</Text>
            </Link>
            <Button colorScheme={"primary"} mt={7} borderRadius={10} width={"100%"}>Sign in</Button>

            <Text fontSize={'sm'} mt={7} justifyContent={"center"} display={"flex"}>New User ?
              <Link href="/register">
                <Text color={"primary.500"} ml={2}> Create a new account.</Text>
              </Link>
            </Text>

          </Box>
        </form>

      </Box>
    </Box>
  </RootLayout>

}