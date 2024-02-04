'use client'
import RootLayout from "@/components/RootLayout";
import signIn from "@/firebase/services/auth/signin";
import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function PasswordInput(props) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        {...props}
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
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error)
    }

    // else successful
    return router.push("/dashboard")
  }

  return <RootLayout>
    <Box display="flex" alignItems="center" flexDirection={'column'} width="100%" height={"100vh"} bg="gray.50" px={"20px"}>
      <Box width="100%" maxWidth={"600px"} bg="white" mt={['20px', '50px', '100px']} borderRadius={20}>
        <form onSubmit={handleForm}>
          <Heading as="h3" size="md" textAlign={'center'} width={'100%'} mt={20}>Sign In</Heading>
          <Box my={20} px={20}>
            <FormControl >
              <FormLabel>Email address</FormLabel>
              <Input type='email' placeholder={'Enter Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl mt={7}>
              <FormLabel>Password</FormLabel>
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>

            <Box>
              <Text color={"primary.500"} fontSize={'sm'} mt={7}>
                <Link href="/forgot-password">Forgot Password?</Link>
              </Text>
            </Box>
            <Button type="submit" colorScheme={"primary"} mt={7} borderRadius={10} width={"100%"}>
              Sign in
            </Button>
            <Box display={"flex"} mt={7} alignItems={"center"}>
              <Text fontSize={'sm'} justifyContent={"center"} display={"flex"}>
                New User ?
              </Text>
              <Link href="/register">
                <Text color={"primary.500"} ml={2}>
                  Create a new account.
                </Text>
              </Link>
            </Box>
          </Box>
        </form>

      </Box>
    </Box >
  </RootLayout >

}