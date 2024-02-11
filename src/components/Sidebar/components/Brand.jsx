// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from '@/components/Separator';

export default function Brand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Box h="100px" w="100%">
			<Text my='32px' fontSize={'3xl'} textAlign={'center'}>Br@in</Text>
			</Box>
			<HSeparator mb='20px' />
		</Flex>
	);
}


