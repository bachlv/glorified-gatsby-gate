import * as React from "react"
import { Heading, Text, Center } from '@chakra-ui/react';

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <Center h="100vh" maxH="-webkit-fill-available" flexDir="column">
      <Heading as="h1" size="4xl">404</Heading>
      <Text as="p">You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Center>
  </>
)

export default NotFoundPage
