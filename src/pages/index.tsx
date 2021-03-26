import * as React from 'react';
import { Link } from "gatsby"
import {
    Box, Heading, Fade, Spinner,
    Button, Text, Flex, VStack, Divider, Center,
    useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody
} from '@chakra-ui/react';
import SEO from '../components/seo';
import { Footer } from '../components/layout/footer';
import SignupForm from '../components/input/signup-form';
import { RobotoMono } from '../@chakra-ui/gatsby-plugin/fonts';
const Model3D = React.lazy(() => import('../components/display/model3d'));

const IndexPage = () => {
    const [progress, setProgress] = React.useState<number>(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const isSSR = typeof window === "undefined"

    return (
        <>
            <SEO title="Đăng ký khóa học" />
            <RobotoMono />
            <Flex h="100vh" m="0 auto" justify="center" alignItems="center">
                <Fade in>
                    <Box zIndex={1} position="relative" maxW={96} textAlign={['center', 'center', 'center', 'left']}>
                        <VStack align="left" textAlign={['center', 'center', 'center', 'left']} spacing={3} mx={[8, 8, 12]} maxW={['md', 'lg', 'lg']}>
                            <Heading as="h1" size="xl" letterSpacing={-2}>
                                Trở thành Bug Hunter số 1
                            </Heading>
                            <Divider orientation="horizontal" mb={4} />
                            <div>
                                <Text display="inline">
                                    Khoá học duy nhất về Bug Hunting với những kiến thức chuyên môn một cách trực quan, dễ hiểu,
                                    dễ liên tưởng, kèm theo đó là các ví dụ,
                                    dẫn chứng và phân tích các lỗi bảo mật đã xảy ra trong thực tế.
                                </Text>
                            </div>
                        </VStack>
                        <Fade in={progress === 0} hidden={progress === 1}>
                            <Button mx={[8, 8, 12]} mt={6} variant="bp" onClick={onOpen} colorScheme="red">Đăng ký ngay</Button>
                        </Fade>
                        <Fade in={progress === 1} hidden={progress === 0}>
                            <Button as={Link} mx={[8, 8, 12]} mt={6} variant="bp" colorScheme="red" to="https://facebook.com/Acme"><a >Tìm hiểu thêm</a></Button>
                        </Fade>
                    </Box>
                </Fade>
                <Box
                    h={["inherit", "inherit", "inherit", "2xl", "3xl"]}
                    w={['100%', '100%', '100%', 'xl', '2xl']}
                    position={['absolute', 'absolute', 'absolute', 'relative']}
                    opacity={[0.3, 0.3, 0.3, 1]}
                >
                    {!isSSR && (
                        <React.Suspense fallback={<Center h="100%"><Spinner /></Center>}>
                            <Model3D />
                        </React.Suspense>
                    )}
                </Box>
            </Flex>
            <Fade in={!isOpen}>
                <Footer />
            </Fade>
            <Drawer onClose={onClose} isOpen={isOpen} initialFocusRef={firstField} size="md" >
                <DrawerOverlay>
                    <DrawerContent bg="#b32c36">
                        <DrawerBody>
                            <Flex ref={firstField} h="100%" align="center" justify="center">
                                {!isSSR && (
                                    <React.Suspense fallback={<Center h="100%"><Spinner /></Center>}>
                                        <SignupForm progress={progress} setProgress={setProgress} />
                                    </React.Suspense>
                                )}
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
export default IndexPage;
