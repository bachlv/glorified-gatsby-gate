import * as React from 'react';
import {
    Box, Heading, Fade, Spinner, LinkOverlay,
    Button, Text, Flex, VStack, Divider, Center,
    useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody
} from '@chakra-ui/react';
import SEO from '../components/seo';
import { Footer } from '../components/layout/footer';
import { RobotoMono } from '../@chakra-ui/gatsby-plugin/fonts';
import SignupForm from '../components/input/signup-form';
const Model3D = React.lazy(() => import('../components/display/model3d'));

const IndexPage = () => {
    const [progress, setProgress] = React.useState<number>(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const isSSR = typeof window === 'undefined';

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.GATSBY_CAPTCHA_KEY}`;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <SEO title="Đăng ký khóa học" />
            <RobotoMono />
            <Flex h="100vh" maxH="-webkit-fill-available" m="0 auto" justify="center" alignItems="center">
                <Fade in>
                    <Box zIndex={1} position="relative" maxW={96} textAlign={['center', null, null, 'left']}>
                        <VStack align="left" textAlign={['center', null, null, 'left']} spacing={3} mx={[8, 8, 12]} maxW={['md', null, 'lg']}>
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
                            <Button as={LinkOverlay} mx={[8, 8, 12]} mt={6} variant="bp" colorScheme="red" href="https://facebook.com/Acme">Tìm hiểu thêm</Button>
                        </Fade>
                    </Box>
                </Fade>
                <Box
                    h={["inherit", null, null, "2xl", "3xl"]}
                    w={['100%', null, null, 'xl', '2xl']}
                    position={['absolute', null, null, 'relative']}
                    opacity={[0.3, null, null, 1]}
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
                    <DrawerContent bg="acmeRed">
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
