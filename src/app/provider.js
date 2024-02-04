// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    fonts: {
        heading: 'var(--font-poppins)',
        body: 'var(--font-poppins)',
    },
    colors: {
        primary: {
            500: '#1976d2', // Your primary color
            600: '#1a548f'
        },
        gray: {
            100: "#f4f4f4",
            200: "#B4B4B4",
            250: "#797979"
        }
    },
    components: {
        Button: {
            variants: {
                primary: {
                    bg: 'primary.500',
                    _hover: {
                        bg: 'primary.600', // Adjust hover color if needed
                    },
                },
            },
        },
    },
})

export function Providers({ children }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}