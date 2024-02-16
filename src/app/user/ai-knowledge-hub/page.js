'use client'
import Chatbot from "@/components/Chatbot";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
    const [messages, setMessages] = useState([
        { text: 'Hello, how can I help you?', type: 'bot' },
        { text: 'Hi there!', type: 'user' },
        { text: 'I need some assistance.', type: 'user' },
        { text: 'Sure, what do you need help with?', type: 'bot' },
    ]);

    const addMessage = (message) => {
        setMessages([...messages, { text: message, type: 'user' }]);
    };
    return <Box pt={{ base: '180px', md: '80px', xl: '80px' }} h={'100%'} w={"100%"}>
        <Chatbot messages={messages} />
    </Box>
}