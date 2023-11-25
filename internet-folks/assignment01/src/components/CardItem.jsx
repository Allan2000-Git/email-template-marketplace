import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text,Button, useColorModeValue} from "@chakra-ui/react"
import { theme } from '../theme';

const CardItem = ({card}) => {
    const primary = useColorModeValue(theme.colors.primary);
    const textColor = useColorModeValue(theme.colors.grey2);
    return (
        <>
            <Card maxW='sm' borderRadius={"20px"} border={"1px solid rgba(147, 162, 211, 0.38)"}>
                <CardBody>
                    <Image
                    src={card?.image}
                    alt={card?.title}
                    borderRadius='lg'
                    width={"100%"}
                    />
                    <Stack mt='6' alignItems={"flex-start"}>
                        <Heading size='md' color={primary} className="poppins-font">{card?.title}</Heading>
                        <Text>
                            {card?.description}    
                        </Text>
                        <Button color={"#424961"} border={`1px solid ${textColor}`} p={"5px 20px"} variant={"outline"} borderRadius={"50px"}>
                            Read More
                        </Button>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default CardItem
