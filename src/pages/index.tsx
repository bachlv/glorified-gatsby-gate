// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage

import * as React from 'react';
import {
    Box, Flex, Heading, useColorMode, SimpleGrid, Container, Stack
} from '@chakra-ui/react';
import SEO from '../components/seo';
import Model3D from '../components/display/model3d';
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
                    columns={{ base: 1, lg: 2 }}
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
