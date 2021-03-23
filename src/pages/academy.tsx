import * as React from 'react';
import {
    Box, Flex, Heading, useColorMode, Text, AvatarGroup, SimpleGrid, Container, Stack, Avatar, useBreakpointValue, Input, Button, Icon
} from '@chakra-ui/react';
import SEO from '../components/seo';
import Model3D from '../components/display/model3d';
import { Footer } from '../components/layout/register';
import SignupForm from '../components/input/signup-form';
import { Inter } from '../@chakra-ui/gatsby-plugin/fonts';

const AcademyPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    if (colorMode === 'dark') toggleColorMode();
    return (
        <>
            <SEO title="Đăng ký khóa học" />
            <Inter />
            <Flex position={'absolute'} zIndex={1} h="100vh" w="100%">
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={1}
                    spacing={[{ base: 10, lg: 32 }]}
                    // py={{ base: 10, sm: 20, lg: 32 }}
                    m="auto">
                    <Stack spacing={{ base: 10, md: 10 }}>
                        <Heading
                            textAlign={['center', 'center', 'left']}
                            lineHeight={1.1}
                            fontSize={['3xl', '3xl', '5xl', '5xl', ]}>
                            Trở thành Bug Hunter Số 1
                        </Heading>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}
                        m="auto">
                        <SignupForm />
                    </Stack>
                </Container>
            </Flex>
            <Box pos="absolute" mt={68} h="100vh" w="60%">
                <Model3D />
            </Box>
        </>
    );
};
export default AcademyPage;
