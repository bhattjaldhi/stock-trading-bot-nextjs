// Chakra imports
import { Box, Flex, Icon, Progress, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
import IconBox from '@/components/Icons/IconBox';
import React from 'react';
// Assets
import { MdOutlineCloudDone } from 'react-icons/md';
import { PRICING } from '@/utils/constants';

export default function Banner(props) {
	const { plan } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	const textColorSecondary = 'gray.400';
	const box = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Card mb={{ base: '0px', lg: '20px' }} alignItems='center'>
			<IconBox
				mx='auto'
				h='100px'
				w='100px'
				icon={<Icon as={MdOutlineCloudDone} color={brandColor} h='46px' w='46px' />}
				bg={box}
			/>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='lg' mt='10px'>
				Current plan
			</Text>
			<Text color={textColorSecondary} fontWeight='bold' fontSize={'2xl'}>
				{PRICING[plan]?.name}
			</Text>
			<Text color={textColorSecondary} fontSize='md' maxW={{ base: '100%', xl: '80%', '3xl': '60%' }} mx='auto'>
				CAD {PRICING[plan]?.price} / Month
			</Text>
			<Box w='100%' mt='auto'>
				<Flex w='100%' justify='space-between' mb='10px'>
					<Box maxW='40%'>
						
					</Box>
					<Text color={textColorSecondary} fontSize='sm' maxW='40%'>
						Change plan
					</Text>
				</Flex>
			</Box>
		</Card>
	);
}
