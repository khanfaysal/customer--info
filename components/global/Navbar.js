import { Box, HStack, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
const Navbar = () => {
    return (
        <Box
            as='form'
            w="full"
            p={[3, 4]}
            mt={['2vh', '5vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}


        >
            <VStack spacing={4} align='flex-start' w='full'>
                <HStack justify='space-around' w="full">
                    <p><NextLink href='/' passHref>
                        <Link fontSize='20px' color='blue.500'>Home</Link>
                    </NextLink></p>
                    <p><NextLink href='/login' passHref>
                        <Link fontSize='20px' color='blue.500'>Log in</Link>
                    </NextLink></p>
                    <p> &nbsp;<NextLink href='/signup' passHref>
                        <Link fontSize='20px' color='blue.500'>Sign Up</Link>
                    </NextLink></p>
                    <p><NextLink href='/customer-details' passHref>
                        <Link fontSize='20px' color='blue.500'>Customer Details</Link>
                    </NextLink></p>
                </HStack>
            </VStack>
        </Box >
    );
};

export default Navbar;