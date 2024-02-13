import PricingGrid from "@/components/PricingGrid";
import { useAuthContext } from "@/contexts/AuthContext";
import { Box, Flex } from "@chakra-ui/react";

export default function ChoosePlan({ onNext }) {

    const { updateUserData } = useAuthContext()

    const handleSelectPlan = async (plan) => {
        await updateUserData({ plan })
        onNext()
    }

    return <Box>
        <Flex my={20} justify={'center'}>
            <PricingGrid onSelect={handleSelectPlan} />
        </Flex>
    </Box>
}