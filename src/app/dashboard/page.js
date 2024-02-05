'use client'
// pages/dashboard.js
import DashboardLayout from "@/layouts/DashboardLayout";
import { Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <DashboardLayout>
      <Text>Welcome to the dashboard</Text>
    </DashboardLayout>
  );
}
