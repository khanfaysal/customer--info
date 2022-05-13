import { useState } from "react";
import { Box, Button, Center, FormControl, FormLabel, Heading, HStack, Input, Link, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";



const CustomerDetails = () => {

    // /form data managing states
    const [formData, setFormData] = useState({});
    const [gender, setGender] = useState();


    // input handler
    const onChangeHandler = (e) => {

        setFormData((prev) => {
            return {
                ...prev, [e.target.name]: e.target.value
            }
        })

    }

    const allFormData = {
        ...formData, gender
    }
    console.log(allFormData);

    //on submit handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormData(allFormData)
        if (allFormData) {
            alert("form data show in console log");
        }
    }

    return (
        <Box
            as='form'
            w={['full', '2xl']}
            p={[8, 5]}
            mt={[20, '10vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
            boxShadow='xl'
            rounded='md'
            bg='white'
        >
            <VStack spacing={4} align='flex-start' w='full'>
                <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                    <Heading>Form</Heading>
                    <Text>Customer details form</Text>
                </VStack>

                {/* form control  */}

                {/* full name section */}
                <Text fontWeight="600">Full Name</Text>
                <HStack justify='space-between' w="full">

                    <FormControl isRequired>
                        <Input type="text" id="firstName" name="customer__firstName" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='firstName' color="gray.600" fontSize='sm' fontWeight="400">First Name</FormLabel>

                    </FormControl>

                    <FormControl isRequired>
                        <Input type="text" id="lastName" name="customer__lastName" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='lastName' color="gray.600" fontSize='sm' fontWeight="400">Second Name</FormLabel>
                    </FormControl>

                </HStack>

                {/* address section */}
                <Text fontWeight="600">Address</Text>

                <FormControl isRequired>
                    <Input type="text" id="streetAddress" name="customer__strAddr" onChange={onChangeHandler} mb={2} />
                    <FormLabel htmlFor='streetAddress' color="gray.600" fontSize='sm' fontWeight="400">Street Address</FormLabel>
                </FormControl>

                <FormControl isRequired>
                    <Input type="text" id="streetAddress1" name="customer__strAddr1" onChange={onChangeHandler} mb={2} />
                    <FormLabel htmlFor='streetAddress1' color="gray.600" fontSize='sm' fontWeight="400">Street Address 1</FormLabel>
                </FormControl>

                {/* city and state section */}
                <HStack justify='space-between' w="full">
                    <FormControl isRequired>
                        <Input type="text" id="city" name="customer__city" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='city' color="gray.600" fontSize='sm' fontWeight="400">City</FormLabel>
                    </FormControl>

                    <FormControl isRequired>
                        <Input type="text" id="province" name="customer__state" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='province' color="gray.600" fontSize='sm' fontWeight="400">Province/State</FormLabel>
                    </FormControl>

                </HStack>

                {/* phone number and email section */}
                <Text fontWeight="600">Phone Number And Email</Text>
                <HStack justify='space-between' w="full">
                    <FormControl isRequired>
                        <Input type="text" id="phoneNumber" name="customer__phone" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='phoneNumber' color="gray.600" fontSize='sm' fontWeight="400">Phone Number</FormLabel>

                    </FormControl>

                    <FormControl isRequired>
                        <Input type="email" id="email" name="customer__email" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='email' color="gray.600" fontSize='sm' fontWeight="400">Email</FormLabel>
                    </FormControl>

                </HStack>

                {/* gender and age section*/}
                <Text fontWeight="600">Gender And Age</Text>
                <HStack justify='space-between' gap={6} w="full">

                    <RadioGroup onChange={(e) => setGender(e)}>
                        <Stack direction='row'>
                            <Radio name="gender" value='male' id="male">Male</Radio>
                            <Radio name="gender" value='female' id="female" >Female</Radio>
                            <Radio name="gender" value='others' id="others" >Others</Radio>
                        </Stack>
                    </RadioGroup>

                    <FormControl isRequired>
                        <Input type="number" id="number" name="customer__age" onChange={onChangeHandler} mb={2} />
                        <FormLabel htmlFor='number' color="gray.600" fontSize='sm' fontWeight="400">Age</FormLabel>
                    </FormControl>

                </HStack>


                <Button onClick={onSubmitHandler} mb={3} colorScheme="blue">Sign up</Button>
                <Center>
                    <p>Already a member?

                        &nbsp;<NextLink href='/login' passHref>
                            <Link color='blue.500'>Log in</Link>
                        </NextLink>
                    </p>
                </Center>

            </VStack>
        </Box >
    )
}
export default CustomerDetails;