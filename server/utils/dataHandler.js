import fs from "fs-extra";
import path from "path";

const filePath = path.resolve("data/questions.json");

export const readData = async () => {
    const data = await fs.readJson(filePath);
    return data;
};

export const writeData = async (data) => {
    await fs.writeJson(filePath, data, { spaces: 2 });
};