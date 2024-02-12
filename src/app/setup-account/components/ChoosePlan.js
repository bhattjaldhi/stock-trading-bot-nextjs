import { Box, Button, Flex } from "@chakra-ui/react";

export default function ChoosePlan({ onSubmit }) {
    return <Box>
        <Flex justify="flex-end">
            <Button colorScheme={'brand'} onClick={onSubmit}>Next</Button>
        </Flex>
    </Box>
}