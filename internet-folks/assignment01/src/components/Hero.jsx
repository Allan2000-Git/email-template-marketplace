import React from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import heroImg from "../assets/heroimg.png"
import vector from "../assets/Vector.png"
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {
    return (
        <>
            <Box minH={"100vh"} className="hero" display={"flex"} flexDirection={{base:"column", md:"column"}}>
                <Box width={{base:"100%", md:"100%", lg:"auto"}} position={"absolute"} right={"0"} top={"0"}>
                    <img className="image1" position={"absolute"} width={"735px"} src={heroImg} alt="" />
                    <img className="image2" width={"752px"} src={vector} alt="" />
                </Box>
                <Container maxW="1400px">
                    <Navbar/>
                    <HeroSection/>
                </Container>
            </Box>
        </>
    )
}

export default Home
