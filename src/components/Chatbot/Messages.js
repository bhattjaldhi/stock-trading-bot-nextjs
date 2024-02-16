import React from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

export default function Messages({ messages }) {
  return (
    <Box p={4} height={"70vh"} overflowY="auto">
      <List spacing={3}>
        {messages?.map((message, index) => (
          <ListItem key={index} textAlign={message.type === 'user' ? 'right' : 'left'}>
            <Text
              bg={message.type === 'user' ? 'brand.100' : 'gray.200'}
              p={2}
              borderRadius="md"
              maxWidth="70%"
              display="inline-block"
            >
              {message.text}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};