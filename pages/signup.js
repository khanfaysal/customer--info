import { Button, Flex, FormControl, FormLabel, Heading, Input, Link } from "@chakra-ui/react";
import NextLink from "next/link";


const IndexPage = () => {
    return (
        <FormControl>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" padding={12} rounded={6}>
                    <Heading mb={6}>Signup</Heading>

                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                    <Input type="text" id="firstName" placeholder="ex. Faysal" mb={3} />

                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                    <Input type="text" id="lastName" placeholder="ex. Khan" mb={3} />

                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input type="email" id="email" placeholder="faysalkhan@gmail.com" mb={3} />

                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input type="password" id="password" placeholder="*******" mb={6} />

                    <Button mb={3} colorScheme="blue">Sign up</Button>
                    <p >Already a member?

                        &nbsp;<NextLink href='/customer-details' passHref>
                            <Link color='blue.500'>Sign in</Link>
                        </NextLink>
                    </p>

                </Flex>

            </Flex>
        </FormControl >
    )
}
export default IndexPage;