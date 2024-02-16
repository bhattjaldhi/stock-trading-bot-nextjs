import Header from './Header';
import Footer from './Footer';
import Messages from './Messages';
import { Box } from '@chakra-ui/react';

export default function Chatbot({ messages }) {
    return <Box height="100%" width={"100%"}>
        <Header />
        <Messages messages={messages} />
        <Footer />
    </Box>
}