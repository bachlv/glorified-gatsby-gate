import * as React from 'react';
import {
    Box, Flex, Heading, useColorMode, Button
} from '@chakra-ui/react';
import SEO from '../components/seo';
import Model3D from '../components/display/model3d';
import { Footer } from '../components/layout/register';
import SignupForm from '../components/input/signup-form';

const AcademyPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    // if (colorMode === 'light') toggleColorMode();
    return (
        <>
            <SEO title="Đăng ký khóa học" />
            <Flex pos="absolute" zIndex={1} w="100%" flexDir="column">
                <Heading as="h2" textAlign="center">Đăng ký khoá học</Heading>
                <SignupForm />
            </Flex>
            <Box pos="absolute" h="100vh" w="100%">
                <Model3D />
            </Box>
            <Footer />
        </>
    );
};

export default AcademyPage;
