import * as React from 'react';
import { Flex, Center, Link } from '@chakra-ui/react';

const Footer = () => (
  <Center position="absolute" bottom={0} fontSize="sm" w="100%" mb={8}>
    {/* <Flex>0</Flex> */}
    <Flex textAlign="center" justify="center" grow={1}>
      <Link href="https://acme.io" fontWeight="normal">
        © 2021 Acme Inc.
      </Link>
    </Flex>
    {/* <Flex grow={0}>0</Flex> */}
  </Center>
);

export { Footer };
