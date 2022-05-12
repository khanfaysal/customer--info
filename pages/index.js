import { Heading, Text } from "@chakra-ui/react";



const IndexPage = () => {
    return (
        <>
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                Make money from <br />
                <Text as={'span'} color={'green.400'}>
                    your audience
                </Text>
            </Heading>
            <Text color={'gray.500'}>
                Monetize your content by charging your most loyal readers and reward
                them loyalty points. Give back to your loyal readers by granting
                them access to your pre-releases and sneak-peaks.
            </Text>
        </>
    )
}
export default IndexPage;