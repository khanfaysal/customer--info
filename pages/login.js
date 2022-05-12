import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const login = () => {
    return (
        <Box
            as='form'
            w={['full', 'md']}
            p={[8, 10]}
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
                    <Heading>Login</Heading>
                    <Text>Enter your Email and Password</Text>
                </VStack>

                {/* form control  */}

                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input type="email" id="email" name="login__email" placeholder="faysalkhan@gmail.com" mb={3} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input type="password" id="password" name="password" placeholder="*******" mb={6} />
                </FormControl>

                <HStack justify='space-between' w="full">
                    <Checkbox>Remember Me</Checkbox>
                    <Button colorScheme="blue" variant="link">Forgot Password ?</Button>
                </HStack>

                <Button mb={3} size='md' w={['full', 'auto']} alignSelf="end" colorScheme="blue">Log in</Button>
                <p>New User? &nbsp;<NextLink href='/signup' passHref>
                    <Link color='blue.500'>Sign up</Link>
                </NextLink></p>

            </VStack>
        </Box >
    );
};

export default login;