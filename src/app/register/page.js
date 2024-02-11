'use client'
import RootLayout from "@/layouts/RootLayout";
import signUp from "@/firebase/services/auth/signup";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";


export default function Page() {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      signUp(values.email, values.password).then(response => {
        if (!response.error) {
          resolve()
        }
      })
    })
  }

  function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
      <InputGroup size='md'>
        <Input
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
      <Box width="100%" maxWidth={"600px"} bg="white" mt={['20px', '50px', '100px']} borderRadius={20}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h3" size="md" textAlign={'center'} width={'100%'} mt={20}>Sign Up</Heading>
          <Box my={20} px={20}>
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
            <Link href="/forgot-password">
              <Text color={"brand.500"} fontSize={'sm'} mt={7}>Forgot Password?</Text>
            </Link>
            <Button colorScheme={"brand"} mt={7} borderRadius={10} width={"100%"} type='submit' isLoading={isSubmitting}>Sign up</Button>
            <Box display={"flex"} mt={7} alignItems={"center"}>
              <Text fontSize={'sm'} justifyContent={"center"} display={"flex"}>
                Already have an account ?
              </Text>
              <Link href="/login">
                <Text color={"brand.500"} ml={2}>
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