import { useState } from "react";
import { Box, Button, Center, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Link, Radio, RadioGroup, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

// initial form data

const InitialFormData = {
    firstName: "",
    lastName: "",
    customer__strAddr: "",
    customer__strAddr1: "",
    customer__city: "",
    customer__state: "",
    customer__phone: "",
    customer__email: "",
    gender: "",
    customer__age: ""
}

const CustomerDetails = () => {

    // /form data managing states
    const [formData, setFormData] = useState(InitialFormData);
    const [errorMessage, setErrorMessage] = useState(formData);


    // input handler
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }

    //on submit handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setErrorMessage(validator(formData));
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


                    {/* phone number and email section */}
                </HStack>
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

                    <RadioGroup onChange={onChangeHandler}>
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

                {/* text area section */}
                <Textarea />

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

const validator = (data) => {

    //regexes
    const regexForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexForName = /^[a-zA-Z ]{2,30}$/;

    // error obejct
    let err = {};

    //email validation
    if (!data.email.trim()) {
        err.email = "Email is required!";
    } else if (!regexForEmail.test(data.email)) {
        err.email = "Email is not in valid format!"
    }

    //password validation
    if (!data.password.trim()) {
        err.password = "Password is required!";
    } else if (data.password < 8) {
        err.password = "Password is not at least 8 charecters!"
    }

    return err;
}