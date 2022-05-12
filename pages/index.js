import { Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

const IndexPage = () => {
    return (
        <FormControl>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" padding={12} rounded={6}>
                    <Heading mb={6}>Login</Heading>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input type="email" id="email" placeholder="faysalkhan@gmail.com" mb={3} />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input type="password" id="password" placeholder="*******" mb={6} />
                    <Button colorScheme="blue">Login</Button>
                </Flex>

            </Flex>
        </FormControl>
    )
}
export default IndexPage;