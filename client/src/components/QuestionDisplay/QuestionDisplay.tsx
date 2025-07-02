// components/QuestionDisplay/QuestionDisplay.tsx
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

type Props = {
    text: string;
    keyId: string | number; // unique key for transition
};

const QuestionDisplay = ({ text, keyId }: Props) => {
    return (
        <div className="display">
            <AnimatePresence mode="wait">
                <motion.span
                    key={keyId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {text}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default QuestionDisplay;
