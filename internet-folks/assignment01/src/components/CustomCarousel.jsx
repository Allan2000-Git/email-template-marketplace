import React, { useRef, useState } from 'react'
import CardItem from './CardItem';
import {Box, Container, Heading, Flex, Button, Stack} from "@chakra-ui/react"
import Slider from "react-slick";
import { cards } from '../cards';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const CustomCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const [activeSlide2, setActiveSlide2] = useState(1);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // beforeChange: (current, next) => setActiveSlide(next),
        afterChange: (current, next) => setActiveSlide2(current),
        responsive: [
            {
            breakpoint: 968,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 375,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
            }
        ]
    };

    const slider = useRef(null);

    const next = () => {
        slider.current.slickNext();
    };

    const previous = () => {
        slider.current.slickPrev(); 
    };
    
    return (
        <>
        <Box className="hero" position={"relative"}>
                <Container maxW="1400px">
                    <Heading color={"#0E2368"} textAlign={{base:"center", lg:"left"}}>
                            Latest Articles
                    </Heading>
                    <Box marginTop={"20px"} py={"20px"} display={"flex"} flexDirection={"column"}>
                        <Slider ref={slider} {...settings}>
                            {
                                cards.map(card => (
                                    <CardItem key={card.id} card={card} />
                                ))
                            }
                        </Slider>
                    </Box>
                    <Box width={"100%"} marginTop={"40px"}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"1rem"} color={"#424961"}>
                            <Button disabled={activeSlide === 1} onClick={previous} p={"1px 1px"} variant={"outline"} colorScheme='#424961'> <FaAngleLeft/> </Button>
                            {activeSlide2 % 2 +1 }/2
                            <Button disabled={activeSlide2 === 2} onClick={next} p={"1px 1px"} variant={"outline"} colorScheme='#424961'> <FaAngleRight/> </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default CustomCarousel
