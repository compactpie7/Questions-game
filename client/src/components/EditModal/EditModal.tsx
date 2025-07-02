import { useState } from "react";
import "./style.css";

export default function EditModal({ question, onClose, onSave, onDelete }: {
    question: { id: number; text: string; passed: boolean };
    onClose: () => void;
    onSave: (updated: { text: string; passed: boolean }) => void;
    onDelete: (id: number) => void;
}) {
    const [text, setText] = useState(question.text);
    const [passed, setPassed] = useState(question.passed);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ text, passed });
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Редактировать вопрос</h2>
                <form onSubmit={handleSubmit}>
                    <input value={text} onChange={e => setText(e.target.value)} placeholder="Текст вопроса" />
                    <label>
                        <input type="checkbox" checked={passed} onChange={e => setPassed(e.target.checked)} />
                        Пройден
                    </label>
                    <button type="submit">Сохранить</button>
                    <button
                        type="button"
                        className="delete-button"
                        onClick={() => {
                            if (window.confirm("Are you sure you want to delete this question?")) {
                                onDelete(question.id);
                            }
                        }}
                    >
                        Delete
                    </button>
                    <button type="button" onClick={onClose}>Отмена</button>
                </form>
            </div>
        </div>
    );
}
