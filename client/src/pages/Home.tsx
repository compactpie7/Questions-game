import '../App.css'
import './home.css'
import { useRandomQuestion } from '../hooks/useRandomQuestion'
import QuestionDisplay from '../components/QuestionDisplay/QuestionDisplay'
import QuestionButton from '../components/QuestionButton/QuestionButton'
import { motion } from 'framer-motion'
import { useUpdateQuestion } from '../hooks/useUpdateQuestion'

export default function Home() {
    const { question, nextQuestion, loading, error } = useRandomQuestion()
    const { updateQuestion } = useUpdateQuestion()

    const markAsPassed = async () => {
        if (!question || question.passed) return
        await updateQuestion(question.id, { text: question.text, passed: true })
        nextQuestion()
    }

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error.message}</p>

    const allDone = !question

    return (
        <div className="home">
            <div className="home__main">
                <h1 className="main__title">Секретный заголовок</h1>

                <QuestionDisplay
                    text={
                        allDone
                            ? '🎉 Все вопросы были успешно пройдены!'
                            : question?.text ?? ''
                    }
                    keyId={question?.id ?? 'done'}
                />

                <div className='main__button-group'>
                    {!allDone && (
                        <>
                            {!question?.passed && (
                                <QuestionButton
                                    as={motion.button}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={markAsPassed}
                                    className='passed-button'
                                >
                                    Ответили
                                </QuestionButton>
                            )}

                            <QuestionButton
                                as={motion.button}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextQuestion}
                            >
                                Следующий вопрос
                            </QuestionButton>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
