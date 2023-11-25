import React from 'react'
import { Box, Container, Flex, Spacer, Heading, Button,Text, useColorModeValue } from '@chakra-ui/react'
import aboutus from "../assets/aboutus.png"
import { theme } from '../theme';

const AboutUs = () => {

    const primary = useColorModeValue(theme.colors.primary);
    const secondary = useColorModeValue(theme.colors.secondary);
    const textColor = useColorModeValue(theme.colors.grey1);

    return (
        <>
            <Box my={"100px"} bg={"linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"}>
                <Container maxW="1200px">
                    <Flex flexDirection={{base: "column", md: "column", lg: "row"}} minWidth='max-content' alignItems='center' gap='2'>
                        <Box display={{base: "none", md:"none", lg:"block"}}>
                            <img src={aboutus} alt="" />
                        </Box>
                        <Spacer />
                        <Box py={{base:"40px", md:"20px"}} display={"flex"} flexDirection={"column"} alignItems={{base: "center", md:"center", lg:"flex-start"}} gap={"2rem"}>
                            <Heading color={primary}>
                                About Us
                            </Heading>
                            <Text lineHeight={"180%"} color={textColor} maxW={{base: "330px", md:"500px", lg:"500px"}}  textAlign={{base: "center", md:"center", lg:"left"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                            </Text>
                            <Button fontSize={"18px"} color={"white"} p={"24px 30px"} borderRadius={"50px"} bgColor={secondary}>Read More</Button>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default AboutUs
