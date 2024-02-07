'use client';

import DashboardLayout from "@/layouts/DashboardLayout";
import { CacheProvider } from "@chakra-ui/next-js";

export default function Layout({ children, ...rest }) {
    return <CacheProvider><DashboardLayout {...rest}>{children}</DashboardLayout></CacheProvider>
}