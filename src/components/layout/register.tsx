import * as React from 'react';
import { Flex, Center, Link } from '@chakra-ui/react';
import { ReactProps } from '../../declaration';

const Footer = () => (
  <Center m={8} insetX={0} bottom={0} fontSize="sm">
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
