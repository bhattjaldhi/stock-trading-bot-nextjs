import React, { useState } from 'react';
import { Box, Input, Button, Flex } from '@chakra-ui/react';
import { MdSend } from 'react-icons/md';

export default function Footer({onSubmit}) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(message)
    setMessage('');
  };

  return (
    <Box p={4} bg={'white'} shadow={'sm'} borderRadius={10}>
      <Flex>
        <Input
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
          mr={2}
        />
        <Button onClick={handleSubmit} colorScheme="brand">
          <MdSend />
        </Button>
      </Flex>
    </Box>
  );
};

