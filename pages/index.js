import { Button, Flex, Heading, Input } from "@chakra-ui/react";

const IndexPage = () => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.100" padding={12} rounded={6}>
                <Heading mb={6}>Login</Heading>
                <Input type="email" placeholder="faysalkhan@gmail.com" variant="filled" mb={3} />
                <Input type="password" placeholder="*******" variant="filled" mb={6} />
                <Button colorScheme="blue">Login</Button>
            </Flex>

        </Flex>
    )
}
export default IndexPage;