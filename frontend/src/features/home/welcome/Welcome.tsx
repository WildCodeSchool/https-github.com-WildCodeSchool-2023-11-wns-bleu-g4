import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import HeroCarousel from "@/features/home/welcome/components/HeroCarousel";
import HeroImageMobile from '/public/images/HeroMobile.png';
import Image from "next/image";

export default function Welcome() {
    return (
        <Flex  position="relative" direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" >
            <Image src={HeroImageMobile} alt="Hero Mobile" className="absolute w-full h-full object-cover md:hidden z-1  " />
            <div className="absolute w-full h-full bg-gradient-to-r opacity-50 from-black to-30 md:hidden z-2 "  />
            <Box flex={1} m={5} className="relative  z-3">
                <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" lineHeight="100%" mb={2} className="text-white md:text-current">Welcome on GearGo</Heading>
                <Text fontSize={{ base: "1xl", md: "lg" }} className="text-white md:text-current">Explore our outdoor equipment rental service
                    for the mountains and the sea. <br/>
                    GearGo offers a wide selection of quality gear.
                    Simply rent what you need and embark on your
                    adventure with ease.</Text>
            </Box>
            <Box w={{ base: "full", md: "65%" }} className="hidden md:block">
                <HeroCarousel/>
            </Box>
        </Flex>
    );
}