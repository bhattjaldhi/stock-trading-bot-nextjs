'use client';

import { AuthContextProvider } from "@/contexts/AuthContext";
import DashboardLayout from "@/layouts/DashboardLayout";
import { CacheProvider } from "@chakra-ui/next-js";

export default function Layout({ children }) {
    return <AuthContextProvider>
        <CacheProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </CacheProvider>
    </AuthContextProvider>
}