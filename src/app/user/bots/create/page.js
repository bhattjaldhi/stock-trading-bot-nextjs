'use client';
import React from 'react';
import { Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import CalendarInput from '@/components/CalendarInput';
import { collection, addDoc } from "firebase/firestore";
import { COLLECTIONS, db } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';

export default function Create() {

  const { user } = useAuthContext()
  const { replace } = useRouter()
  const {
    getValues,
    handleSubmit,
    setValue,
    register,
    formState: { isSubmitSuccessful, errors, isSubmitting },
  } = useForm()

  const onSubmit = async (values) => {
    await addDoc(collection(db, COLLECTIONS.BOTS), { ...values, userId: user.uid });
    setTimeout(() => {
      replace('/user/bots')
    }, 1000)
  }

  const validateLimits = (value) => {
    const values = getValues()
    if (parseFloat(value) > parseFloat(values.amount)) {
      return "Limit cannot be greater than the amount";
    }
    return true;
  };

  return (
    <Box width="100%" maxWidth={"600px"} bg="white" mt={['20px', '50px', '100px']} borderRadius={20} p={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h3" size="md" width={'100%'}>Create a bot</Heading>
        {isSubmitSuccessful && <Alert status='success' variant='left-accent' mt={3}>
          <AlertIcon />
          Bot has been created successfully.
        </Alert>}
        <Box mt={5}>
          <FormControl isInvalid={errors.symbol}>
            <FormLabel>Symbol</FormLabel>
            <Input type="text" placeholder={'Enter stock symbol'}
              {...register('symbol', {
                required: 'Symbol is required',
              })} />
            <FormErrorMessage>
              {errors.symbol && errors.symbol.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.amount} mt={7}>
            <FormLabel>Amount</FormLabel>
            <Input type="number" placeholder={'Enter amount'}
              {...register('amount', {
                required: 'Amount is required',
              })} />
            <FormErrorMessage>
              {errors.amount && errors.amount.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.trade_limit} mt={7}>
            <FormLabel display={"flex"} alignItems={'center'}>Trade limit
              <Text color={"gray.500"} fontSize={10} ml={1}>(optional)</Text>
            </FormLabel>
            <Input type="number" placeholder={'Enter trade limit'}
              {...register('trade_limit')} />

            <FormErrorMessage>
              {errors.trade_limit && errors.trade_limit.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.buy_limit} mt={7}>
            <FormLabel display={"flex"} alignItems={'center'}>Buy upper limit
              <Text color={"gray.500"} fontSize={10} ml={1}>(optional)</Text>
            </FormLabel>
            <Input type="number" placeholder={'Enter buy upper limit'}
              {...register('buy_limit', {
                validate: value => validateLimits(value)
              })} />
            <FormErrorMessage>
              {errors.buy_limit && errors.buy_limit.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.sell_limit} mt={7}>
            <FormLabel display={"flex"} alignItems={'center'}>Sell upper limit
              <Text color={"gray.500"} fontSize={10} ml={1}>(optional)</Text>
            </FormLabel>
            <Input type="sell_limit" placeholder={'Enter sell upper limit'}
              {...register('sell_limit', {
                validate: value => validateLimits(value)
              })} />
            <FormErrorMessage>
              {errors.sell_limit && errors.sell_limit.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.date} mt={7}>
            <FormLabel>Expires on</FormLabel>
            <CalendarInput
              {...register('date', {
                required: 'Date is required',
              })}
              onDateChange={(value) => setValue('date', value)}
            />
            <FormErrorMessage>
              {errors.date && errors.date.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme={"brand"} mt={7} borderRadius={10} width={"100%"} isLoading={isSubmitting}>
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
}
