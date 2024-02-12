'use client'
import RootLayout from "@/layouts/RootLayout";
import signIn from "@/firebase/services/auth/signin";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (values) => {

    const { result, error } = await signIn(values.email, values.password);

    if (error) {
      if (error.code === "auth/invalid-credential") {
        setError('email', { message: "Invalid Email or Password" }, { shouldFocus: true })
        setError('password', { message: "Invalid Email or Password" })
      }
      if(error.code === 'auth/too-many-requests'){
        setError('email', { message: "Too many requests made with invalid credentials, please try again later." }, { shouldFocus: true })
      }
      return
    }

    // else successful
    return router.push("/user/dashboard")
  }

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
          {...register('password', {
            required: 'Password is required',
          })}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  return <RootLayout>
    <Box display="flex" alignItems="center" flexDirection={'column'} width="100%" height={"100vh"} bg="gray.50" px={"20px"}>
      <Box width="100%" maxWidth={"600px"} bg="white" mt={['20px', '50px', '70px', '100px']} borderRadius={20}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h3" size="md" textAlign={'center'} width={'100%'} mt={20}>Sign In</Heading>
          <Box my={20} px={[10, 10, 10, 20]}>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type='email' placeholder={'Enter Email'}
                {...register('email', {
                  required: 'Email is required',
                })} />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={7} isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <PasswordInput />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Box>
              <Text color={"brand.500"} fontSize={'sm'} mt={7}>
                <Link href="/forgot-password">Forgot Password?</Link>
              </Text>
            </Box>
            <Button type="submit" colorScheme={"brand"} mt={7} borderRadius={10} width={"100%"} isLoading={isSubmitting}>
              Sign in
            </Button>
            <Box display={"flex"} mt={7} alignItems={"center"}>
              <Text fontSize={'sm'} justifyContent={"center"} display={"flex"}>
                New User ?
              </Text>
              <Link href="/register">
                <Text color={"brand.500"} ml={2}>
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