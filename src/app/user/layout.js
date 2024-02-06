'use client';

import DashboardLayout from "@/layouts/DashboardLayout";
import { CacheProvider } from "@chakra-ui/next-js";

export default function Layout({ children }) {
    return <CacheProvider><DashboardLayout>{children}</DashboardLayout></CacheProvider>
}