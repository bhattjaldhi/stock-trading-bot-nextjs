'use client'
import RootLayout from "@/components/RootLayout";
import { Button, Text } from "@chakra-ui/react";

export default function Page() {
    return <RootLayout>
        <Text>Welcome to dashboard</Text>
        <Button>Logout</Button>
    </RootLayout>
}