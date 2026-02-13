import { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ContextSidebar from './ContextSidebar';
import { motion } from 'framer-motion';

const ConsultationPage = () => {
    // Mock data for the demonstration
    const lawyer = {
        name: "Atty. Jessica Pearson",
        specialty: "Corporate Law Specialist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXdCQcyos3LeTzbKO1VVpW-siN2DepOrco0m6luunaQWvEjA5Co6RSBExcEtqcxbqwSDcFOIkvJW2HK2Ve4eo9_ZzeqD909niXdHpami-_EWEmRsmSLNwSwIl_DqKkU0VQgNvpjfOM-JvWVYkwJA_Vc1mroeH6olW1nR3a8RuHiriCk2Tixgmo47o-SpHCD2Q39brTKTt4K9k7OAbyR5m5cedS0aYah6FEK1BXr4Uh78lj7pqXCSvxQ1EWWOmsIcEZ2co-JlZ4L1Y",
        rating: 4.9,
        reviews: 124,
        firm: "Pearson Specter Litt LLC"
    };

    const initialMessages = [
        {
            sender: 'lawyer',
            senderName: 'Atty. Jessica Pearson',
            time: '10:01 AM',
            type: 'text',
            content: "Hello James, I've reviewed the contract draft you sent over earlier. Overall it looks solid, but there are two clauses in the liability section we need to discuss."
        },
        {
            sender: 'user',
            senderName: 'You',
            time: '10:02 AM',
            type: 'text',
            content: "Thanks for the quick turnaround, Jessica. I was worried about Clause 4 specifically. Does it expose us too much?"
        },
        {
            sender: 'lawyer',
            senderName: 'Atty. Jessica Pearson',
            time: '10:04 AM',
            type: 'text',
            content: "Exactly. Clause 4 currently has an uncapped indemnity provision. I suggest we cap it at the contract value. Here is the revised language I propose:"
        },
        {
            sender: 'lawyer',
            senderName: 'Atty. Jessica Pearson',
            time: '10:04 AM',
            type: 'attachment',
            fileName: 'Revised_Clause_4.pdf',
            fileSize: '145 KB',
            fileExt: 'PDF'
        }
    ];

    const [messages, setMessages] = useState(initialMessages);

    const handleSendMessage = (content) => {
        const newMessage = {
            sender: 'user',
            senderName: 'You',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
            content: content
        };
        setMessages([...messages, newMessage]);

        // Simulate lawyer response
        setTimeout(() => {
            const botResponse = {
                sender: 'lawyer',
                senderName: lawyer.name,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'text',
                content: "Internalizing that. Let me look into the specific jurisdictional requirements for this amendment."
            };
            setMessages(prev => [...prev, botResponse]);
        }, 3000);
    };

    return (
        <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden relative bg-background-light dark:bg-background-dark transition-colors font-sans">
            {/* Left/Center: Chat Interface */}
            <main className="flex-1 flex flex-col h-full bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
                <ChatHeader lawyer={lawyer} />
                <MessageList messages={messages} lawyer={lawyer} />
                <ChatInput onSendMessage={handleSendMessage} />
            </main>

            {/* Right Sidebar */}
            <ContextSidebar lawyer={lawyer} />
        </div>
    );
};

export default ConsultationPage;
