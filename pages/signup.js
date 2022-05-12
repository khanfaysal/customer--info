import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";


const IndexPage = () => {
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
                    <Heading>Sign Up</Heading>
                    <Text>Enter your Information</Text>
                </VStack>

                {/* form control  */}

                {/* full name section */}
                <Text fontWeight="600">Full Name</Text>
                <HStack justify='space-between' w="full">

                    <FormControl isRequired>
                        <Input type="text" id="firstName" name="signup__firstName" mb={2} />
                        <FormLabel htmlFor='firstName' color="gray.600" fontSize='sm' fontWeight="400">First Name</FormLabel>
                    </FormControl>

                    <FormControl isRequired>
                        <Input type="text" id="lastName" name="signup__lastName" mb={2} />
                        <FormLabel htmlFor='lastName' color="gray.600" fontSize='sm' fontWeight="400">Second Name</FormLabel>
                    </FormControl>

                </HStack>

                <Text fontWeight="600">Email</Text>
                <FormControl isRequired>
                    <Input type="email" id="email" name="signup__email" mb={2} />
                    <FormLabel htmlFor='email' color="gray.600" fontSize='sm' fontWeight="400">Email address</FormLabel>
                </FormControl>

                <Text fontWeight="600">Password</Text>
                <FormControl isRequired>
                    <Input type="password" id="password" name="signup__password" mb={2} />
                    <FormLabel htmlFor='password' color="gray.600" fontSize='sm' fontWeight="400">Password</FormLabel>
                </FormControl>

                <Button mb={3} colorScheme="blue">Sign up</Button>
                <p >Already a member?

                    &nbsp;<NextLink href='/login' passHref>
                        <Link color='blue.500'>Log in</Link>
                    </NextLink>
                </p>

            </VStack>
        </Box >



        // <FormControl>
        //     <Flex height="100vh" alignItems="center" justifyContent="center">
        //         <Flex direction="column" background="gray.100" padding={12} rounded={6}>
        //             <Heading mb={6}>Signup</Heading>

        //             <FormLabel htmlFor='firstName'>First Name</FormLabel>
        //             <Input type="text" id="firstName" placeholder="ex. Faysal" mb={3} />

        //             <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        //             <Input type="text" id="lastName" placeholder="ex. Khan" mb={3} />

        //             <FormLabel htmlFor='email'>Email address</FormLabel>
        //             <Input type="email" id="email" placeholder="faysalkhan@gmail.com" mb={3} />

        //             <FormLabel htmlFor='password'>Password</FormLabel>
        //             <Input type="password" id="password" placeholder="*******" mb={6} />

        //             <Button mb={3} colorScheme="blue">Sign up</Button>
        //             <p >Already a member?

        //                 &nbsp;<NextLink href='/login' passHref>
        //                     <Link color='blue.500'>Log in</Link>
        //                 </NextLink>
        //             </p>

        //         </Flex>

        //     </Flex>
        // </FormControl >
    )
}
export default IndexPage;