import PricingGrid from "@/components/PricingGrid";
import { Box, Button, Flex } from "@chakra-ui/react";

export default function ChoosePlan({ onSelect, onPrevious }) {

    const handleSelectPlan = async (plan) => {
        onSelect(plan)
    }

    return <Box>
        <Flex my={20} justify={'center'}>
            <PricingGrid onSelect={handleSelectPlan} />
        </Flex>
        <Flex justify="space-between">
            <Button colorScheme={'brand'} onClick={onPrevious}>Back</Button>
        </Flex>
    </Box>
}