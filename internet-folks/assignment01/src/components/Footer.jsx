import React from 'react'
import { Grid, GridItem, Box, Container, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import logo from "../assets/logo.png"
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { theme } from '../theme';

const Footer = () => {
    const primary = useColorModeValue(theme.colors.primary);
    const textColor = useColorModeValue(theme.colors.grey4);
    const footerCopyrightText = useColorModeValue(theme.colors.footer);
    return (
        <>
            <Box px={{base:"40px",md:"60px",lg:"0px"}} marginTop={"100px"} py={"60px"} bg={"linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"}>
                <Container maxW="1400px">
                    <Box display={"flex"} justifyContent={"space-between"} gap={{base:"40px", md:"20px",lg:"0px"}} flexDirection={{base:"column", md:"column", lg:"row"}}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                <Box>
                                    <img src={logo} width={"161px"} alt="logo" />
                                </Box>
                        </Box>
                        <Box marginTop={{base:"40px", md:"40px", lg:"0px"}}>
                            <Flex direction={"column"} gap={{base:"0rem", md:"0.6rem", lg:"1.2rem"}}>
                                <Text color={primary} fontWeight={"600"} fontSize={"18px"}>
                                    Contact Us
                                </Text>
                                <Flex fontSize={"16px"} color={textColor} direction={"column"} gap={{base:"0rem", md:"0.6rem", lg:"1.2rem"}}>
                                    <Text maxW={"300px"}>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
                                    <Text>example2020@gmail.com   </Text>
                                    <Text>(904) 443-0343</Text>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={"column"} gap={{base:"0rem", md:"0.6rem", lg:"1.2rem"}}>
                                <Text color={primary} fontWeight={"600"} fontSize={"18px"}>
                                    More
                                </Text>
                                <Flex fontSize={"16px"} color={textColor} direction={"column"} gap={{base:"0rem", md:"0.6rem", lg:"1rem"}}>
                                    <Text>About Us</Text>
                                    <Text>Products</Text>
                                    <Text>Career</Text>
                                    <Text>Contact Us</Text>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"} gap={"2rem"} flexDirection={"column"}>
                            <Box color={primary} display={{base:"none", md:"none", lg:"flex"}} flexDirection={"column"} alignItems={"flex-end"}>
                                <Text fontWeight={"600"} fontSize={"18px"}>
                                    Social Links
                                </Text>
                                <Flex marginTop={"1rem"} fontSize={"20px"} gap={"2rem"}>
                                    <FaInstagram/>
                                    <FaTwitter/>
                                    <FaFacebookF/>
                                </Flex>
                            </Box>
                            <Box display={{base:"flex", md:"flex", lg:"block"}} justifyContent={{base:"center", md:"none", lg:"none"}}>
                                <Text color={footerCopyrightText} fontSize={"16px"}>
                                    © 2022 Food Truck Example
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer
