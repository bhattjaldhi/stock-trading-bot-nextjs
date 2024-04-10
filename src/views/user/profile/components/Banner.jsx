// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '@/components/card/Card'
import { NextAvatar } from '@/components/image/Avatar'

export default function Banner (props) {
  const {
    banner,
    avatar,
    name,
    email,
    posts,
    ...rest
  } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important'
  )
  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems='center' {...rest}>
      <Box
        bg={`url(/assets/images/profile_banner.png)`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      {/* <NextAvatar
        mx='auto'
        src={Avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      /> */}
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {email}
      </Text>
    </Card>
  )
}
