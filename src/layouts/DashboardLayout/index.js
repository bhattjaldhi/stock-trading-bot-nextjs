import Footer from "@/components/Footer";
import AdminNavbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import routes from "@/routes";
import { getActiveNavbar, getActiveNavbarText, getActiveRoute } from "@/utils/navigation";
import { Box, Portal, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export default function DashboardLayout({ children, ...rest }) {
  const { onOpen } = useDisclosure();
  const [fixed] = useState(false);

  const bg = useColorModeValue('secondaryGray.300', 'navy.900');


    return <Box h="100vh" w="100vw" bg={bg}>
        <Sidebar routes={routes} display="none" />
        <Box
            float="right"
            minHeight="100vh"
            height="100%"
            overflow="auto"
            position="relative"
            maxHeight="100%"
            w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
            maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
            transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
            transitionDuration=".2s, .2s, .35s"
            transitionProperty="top, bottom, width"
            transitionTimingFunction="linear, linear, ease"
        >

            <Portal>
                <Box>
                    <AdminNavbar
                        onOpen={onOpen}
                        logoText={'Horizon UI Dashboard PRO'}
                        brandText={getActiveRoute(routes)}
                        secondary={getActiveNavbar(routes)}
                        message={getActiveNavbarText(routes)}
                        fixed={fixed}
                        {...rest}
                    />
                </Box>
            </Portal>
            <Box
                mx="auto"
                p={{ base: '20px', md: '30px' }}
                pe="20px"
                minH="100vh"
                pt="50px"
            >
                {children}
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    </Box>
}