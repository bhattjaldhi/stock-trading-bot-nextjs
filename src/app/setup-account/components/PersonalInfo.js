import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function PersonalInfo({ onNext }) {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()


    const onSubmit = async (values) => {
        onNext()
        return
    }

    return <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex my={20} justify={'center'}>
                <Stack width={['100%', '100%', '100%', '90%', '50%']} bg="white" p={10} borderRadius={20}>
                    <Grid templateColumns={'repeat(2, 1fr)'} gap={2}>
                        <GridItem>
                            <FormControl isInvalid={errors.first_name}>
                                <FormLabel>First Name</FormLabel>
                                <Input type='text' placeholder={'Enter first name'}
                                    {...register('first_name', {
                                        required: 'First name is required',
                                    })} />
                                <FormErrorMessage>
                                    {errors.first_name && errors.first_name.message}
                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isInvalid={errors.last_name}>
                                <FormLabel>Last name</FormLabel>
                                <Input type='text' placeholder={'Enter last name'}
                                    {...register('last_name', {
                                        required: 'Last name is required',
                                    })} />
                                <FormErrorMessage>
                                    {errors.address && errors.address.message}
                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <FormControl isInvalid={errors.address} mt={5}>
                        <FormLabel>Address</FormLabel>
                        <Input type='text' placeholder={'Address'}
                            {...register('address', {
                                required: 'Address is required',
                            })} />
                        <FormErrorMessage>
                            {errors.address && errors.address.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.address} mt={5}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type='text' placeholder={'437-262-7272'}
                            {...register('contact', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\d{3}-\d{3}-\d{4}$/,
                                    message: "Invalid phone number"
                                }
                            })} />
                        <FormErrorMessage>
                            {errors.contact && errors.contact.message}
                        </FormErrorMessage>
                    </FormControl>

                </Stack>
            </Flex>
            <Flex justify="flex-end">

                <Button colorScheme={'brand'} type="submit">Next</Button>
            </Flex>

        </form>
    </Box>
}