import { HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-white text-lg font-black tracking-tight uppercase tracking-widest text-xs">Overall Rating</h3>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                        key={star}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onRatingChange(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="group focus:outline-none transition-colors"
                    >
                        <HiStar
                            className={`text-4xl transition-colors duration-200 ${star <= (hover || rating)
                                    ? 'text-yellow-400'
                                    : 'text-slate-200 dark:text-slate-700'
                                }`}
                        />
                    </motion.button>
                ))}
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                {rating > 0 ? `You rated ${rating} out of 5 stars` : 'Click to rate'}
            </p>
        </div>
    );
};

export default StarRating;
