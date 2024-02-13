import { useAuthContext } from "@/contexts/AuthContext";
import { COLLECTIONS, db } from "@/firebase/firebaseConfig";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Stack } from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

export default function PersonalInfo({ onNext }) {

    const { user , updateUserData} = useAuthContext()
  
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()


    const onSubmit = async (values) => {
        return new Promise(async (resolve, reject) => {
            try {
                const ref = doc(db, COLLECTIONS.USERS, user.uid);
                await setDoc(ref, values, { merge: true });
                await updateUserData({displayName: `${values.firstName} ${values.lastName}`})
                resolve()
                onNext()
            } catch (error) {
                console.error(error)
                reject()
            }
        })
    }

    return <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex my={20} justify={'center'}>
                <Stack width={['100%', '100%', '100%', '90%', '50%']} bg="white" p={10} borderRadius={20}>
                    <Grid templateColumns={'repeat(2, 1fr)'} gap={2}>
                        <GridItem>
                            <FormControl isInvalid={errors.firstName}>
                                <FormLabel>First Name</FormLabel>
                                <Input type='text' placeholder={'Enter first name'}
                                    {...register('firstName', {
                                        required: 'First name is required',
                                    })} />
                                <FormErrorMessage>
                                    {errors.firstName && errors.firstName.message}
                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isInvalid={errors.lastName}>
                                <FormLabel>Last name</FormLabel>
                                <Input type='text' placeholder={'Enter last name'}
                                    {...register('lastName', {
                                        required: 'Last name is required',
                                    })} />
                                <FormErrorMessage>
                                    {errors.lastName && errors.lastName.message}
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
                    <FormControl isInvalid={errors.contact} mt={5}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type='text' placeholder={'437-262-7272'}
                            {...register('contact', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\d{3}\d{3}\d{4}$/,
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
                <Button colorScheme={'brand'} type="submit" isLoading={isSubmitting}>Next</Button>
            </Flex>
        </form>
    </Box>
}