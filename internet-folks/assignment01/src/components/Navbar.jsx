import React from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import logo from "../assets/logo.png"
import { Button } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
            <Flex py="30px">
                <Box>
                    <img src={logo} width={"107px"} alt="logo" />
                </Box>
                <Spacer />
                <Box>
                    <Button _hover={""} p={{base:"",md:"",lg:"5px 26px"}} height={{base:"40px",md:"50px",lg:"50px"}} border={"2px solid white"} borderRadius={"50px"} variant={"outline"} color={"white"}>
                        <Text color={"white"} margin={"0"} fontSize={{base:"13px",md:"18px",lg:"18px"}}>Get in Touch</Text>
                    </Button>
                </Box>
            </Flex>
        </>
    )
}

export default Navbar
