import { Box, Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";


const IndexPage = () => {
    return (

        <Box
            as='form'
            w={['full', '4xl']}
            p={[8, 10]}
            mt={[20, '14vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
            boxShadow='xl'
            rounded='md'
            bg='white'
        >
            <VStack spacing={4} align='flex-start' w='full'>

                <Heading
                    fontWeight={600}
                    alignSelf="center"
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Customer&nbsp;
                    <Text as={'span'} color={'blue.400'}>
                        Informations
                    </Text>
                </Heading>
            </VStack>
        </Box >
    )
}
export default IndexPage;