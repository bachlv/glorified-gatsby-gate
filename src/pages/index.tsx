import * as React from 'react';
import {
    Box, Heading, useColorMode, Fade, IconButton,
    Button, Text, Flex, VStack, Divider,
    useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, DrawerCloseButton
} from '@chakra-ui/react';
import { VscArrowLeft } from "react-icons/vsc";
import SEO from '../components/seo';
import Model3D from '../components/display/model3d';
import { Footer } from '../components/layout/footer';
import SignupForm from '../components/input/signup-form';
import { RobotoMono } from '../@chakra-ui/gatsby-plugin/fonts';

const IndexPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [progress, setProgress] = React.useState<number>(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();

    React.useEffect(() => { if (colorMode === 'light') toggleColorMode(); })

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
                                    Khoá học duy đất về Bug Hunting với những kiến thức chuyên môn một cách trực quan, dễ hiểu,
                                    dễ liên tưởng, kèm theo đó là các ví dụ,
                                    dẫn chứng và phân tích các lỗi bảo mật đã xảy ra trong thực tế.
                                </Text>
                            </div>
                        </VStack>
                        <Fade in={progress === 0}>
                            <Button mx={[8, 8, 12]} mt={6} variant="bp" onClick={onOpen} colorScheme="red">Đăng ký ngay</Button>
                        </Fade>
                    </Box>
                </Fade>
                <Box
                    h={["inherit", "inherit", "inherit", "2xl", "3xl"]}
                    w={['100%', '100%', '100%', 'xl', '2xl']}
                    position={['absolute', 'absolute', 'absolute', 'relative']}
                    opacity={[0.3, 0.3, 0.3, 1]}
                >
                    <Model3D />
                </Box>
            </Flex>
            <Fade in={!isOpen}>
                <Footer />
            </Fade>
            <Drawer onClose={onClose} isOpen={isOpen} initialFocusRef={firstField} size="md" >
                <DrawerOverlay>
                    <DrawerContent bg="#b32c36">
                        <DrawerBody>
                            <Flex ref={firstField} h="100%" align="center" justify="center"><SignupForm progress={progress} setProgress={setProgress} /></Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
export default IndexPage;
