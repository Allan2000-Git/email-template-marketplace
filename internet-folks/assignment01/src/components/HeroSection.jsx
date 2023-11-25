import React from 'react'
import { Box, Text, useColorModeValue, Button, Heading } from '@chakra-ui/react'
import { theme } from '../theme'

const HeroSection = () => {
    const primary = useColorModeValue(theme.colors.primary);
    const secondary = useColorModeValue(theme.colors.secondary);
    const textColor = useColorModeValue(theme.colors.grey1);

    return (
        <>
            <Box marginTop={{base:"250px",lg:"0px"}} px={{base:"40px", md:"0px", lg:"0px"}} py={"100px"} maxW={"380px"} display={"flex"} alignItems={{base:"center",md:"center",lg:"flex-start"}} justifyContent={{base:"center",md:"center",lg:"none"}} flexDirection={"column"}>
                <Heading lineHeight= '120%' as="h1" fontSize={{base:"38px",md:"38px",lg:"62px"}} textAlign={{base:"center",md:"center",lg:"left"}} color={primary}>
                    Discover the <Text display={"inline-block"} color={secondary}>Best</Text> Food and Drinks
                </Heading>
                <Text color={textColor} fontSize={"18px"} marginTop={"26px"} textAlign={{base:"center",md:"center",lg:"left"}}>
                    Naturally made Healthcare Products for the better care & support of your body.
                </Text>
                <Button marginTop={"41px"} fontSize={{base:"16px",md:"16px",lg:"18px"}} color={"white"} p={{base:"24px 33px",md:"center",lg:"28px 44px"}} borderRadius={"50px"} colorScheme="red">Explore Now!</Button>
            </Box>
        </>
    )
}

export default HeroSection
