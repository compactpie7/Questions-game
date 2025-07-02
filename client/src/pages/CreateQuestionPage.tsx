import React, { useState } from 'react';
import "./CreateQuestionPage.css";
import "../App.css";
import QuestionButton from '../components/QuestionButton/QuestionButton';
import { useCreateQuestion } from '../hooks/useCreateQuestion'; // Make sure path is correct

export default function CreateQuestionPage() {
    const [text, setText] = useState("");
    const { createQuestion, loading, error } = useCreateQuestion();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            await createQuestion({ text, passed: false });
            setText(""); // clear input
            alert("Вопрос успешно создан!");
        } catch (err) {
            console.error("Ошибка при создании вопроса:", err);
        }
    };

    return (
        <div className='create-question__main'>
            <h1 className='main__title'>Страница создания вопроса</h1>
            <div className="create-question__from-wrapper">
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        className='form-input'
                        type="text"
                        placeholder='Введите текст для вашего вопроса'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <QuestionButton type="submit" disabled={loading}>
                        {loading ? "Создание..." : "Подтвердить"}
                    </QuestionButton>
                    {error && <p style={{ color: 'red' }}>Ошибка: {error.message}</p>}
                </form>
            </div>
        </div>
    );
}
