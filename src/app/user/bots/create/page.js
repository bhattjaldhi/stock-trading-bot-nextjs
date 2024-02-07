'use client';
import React from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function Create() {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()
    
      const onSubmit = async (values) => {
    
        
      }

  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Box width="100%" maxWidth={"600px"} bg="white"  borderRadius={20}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box px={20} py={20}>
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
    </Box>
  );
}
