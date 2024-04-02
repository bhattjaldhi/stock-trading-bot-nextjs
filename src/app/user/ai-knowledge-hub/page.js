'use client'
import Chatbot from "@/components/Chatbot";
import rest from "@/services/rest";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
    const [messages, setMessages] = useState([
        { text: 'Hello, how can I help you?', type: 'bot' },
    ]);


    const addMessage = (message) => {
        let userMessage = { text: message, type: 'user' }
        setMessages([...messages, { ...userMessage, loading: true }]);
        setTimeout(() => {
            rest.chat({userMessage: message}).then(x => {
           if(x.status === 200) {
            setMessages([...messages, userMessage, { text: x.data.botmessage, type: 'bot' }]);
           }
        })
        }, 1000)
    };

    return <Box pt={{ base: '180px', md: '80px', xl: '80px' }} h={'100%'} w={"100%"}>
        <Chatbot messages={messages} onMessage={addMessage} />
    </Box>
}