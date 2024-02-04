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
    <Box display="flex" alignItems="center" flexDirection={'column'} width="100%" height={"100vh"} bg="gray.50" px={"20px"}>
      <Box width="100%" maxWidth={"600px"} bg="white" mt={['20px', '50px', '100px']} borderRadius={20}>
        <form>
          <Heading as="h3" size="md" textAlign={'center'} width={'100%'} mt={20}>Sign Up</Heading>
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
            <Button colorScheme={"primary"} mt={7} borderRadius={10} width={"100%"}>Sign up</Button>
            <Box display={"flex"} mt={7} alignItems={"center"}>
              <Text fontSize={'sm'} justifyContent={"center"} display={"flex"}>
                Already have an account ?
              </Text>
              <Link href="/login">
                <Text color={"primary.500"} ml={2}>
                  Sign in.
                </Text>
              </Link>
            </Box>
          </Box>
        </form>

      </Box>
    </Box>
  </RootLayout>

}