import { useState } from 'react';
import { HiPlusCircle, HiOutlineEmojiHappy, HiPaperAirplane } from 'react-icons/hi';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-400 dark:border-slate-800 transition-colors">
            <form onSubmit={handleSubmit} className="relative flex items-end gap-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-400 dark:border-slate-700 rounded-xl p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <button type="button" className="p-2.5 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 shrink-0">
                    <HiPlusCircle size={24} />
                </button>
                <textarea
                    className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder-slate-400 resize-none py-2.5 max-h-32 text-left"
                    placeholder="Type your message..."
                    rows="1"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                ></textarea>
                <button type="button" className="p-2.5 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 shrink-0">
                    <HiOutlineEmojiHappy size={24} />
                </button>
                <button
                    type="submit"
                    className="size-11 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
                >
                    <HiPaperAirplane className="text-xl rotate-45 -mt-0.5 -ml-0.5" />
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
