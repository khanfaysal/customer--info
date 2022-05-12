import { Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import Link from 'next/link';

const CustomerDetails = () => {
    return (
        <FormControl>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" padding={12} rounded={6}>
                    <Heading mb={6}>Signup</Heading>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input type="email" id="email" placeholder="faysalkhan@gmail.com" mb={3} />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input type="password" id="password" placeholder="*******" mb={6} />
                    <Button colorScheme="blue">Login</Button>
                    <p>New User?<Link href="/packers"><a className="text__color">Create an account</a></Link> </p>
                </Flex>

            </Flex>
        </FormControl>
    )
}
export default CustomerDetails;