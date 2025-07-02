import { readData, writeData } from "../utils/dataHandler.js"

const root = {
    questions: async () => {
        const { questions } = await readData();
        return questions;
    },

    createQuestion: async ({ input }) => {
        const data = await readData();
        const questions = data.questions;

        const newId = questions.length + 1;
        const newQuestion = { id: newId, ...input };

        questions.push(newQuestion);
        await writeData({ questions });

        return newQuestion;
    },

    updateQuestion: async ({ id, input }) => {
        const data = await readData();
        const questions = data.questions;

        const index = questions.findIndex(q => q.id === id);
        if (index === -1) throw new Error("Question not found");

        questions[index] = { id, ...input };
        await writeData({ questions });

        return questions[index];
    },

    deleteQuestion: async ({ id }) => {
        let { questions } = await readData();

        questions = questions.filter(q => q.id !== id);
        questions = questions.map((q, i) => ({ ...q, id: i + 1 }));

        await writeData({ questions });
        return questions;
    }
};

export default root