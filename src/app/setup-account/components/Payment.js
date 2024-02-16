'use client'

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { createCheckoutSession } from "@/services/stripe/session";

export default function Payment({ plan }) {


  React.useEffect(() => {
    const fetchData = async () => {
      createCheckoutSession({ plan }).then((x) => {
        window.location.href = x.session.url
      })
    }
    fetchData()
  }, []);

  return <Box>
    <Flex my={20} justify={'center'}>
      Redirecting...
    </Flex>
  </Box>
}