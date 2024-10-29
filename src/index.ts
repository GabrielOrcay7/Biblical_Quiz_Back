// src/index.ts
import express from "express";
import cors from "cors";
import { quizData } from "./quizData";

const app = express();
const PORT = 5000;

app.use(cors());

// Rota para obter as perguntas do quiz
app.get("/api/quiz", (req, res) => {
  res.json(quizData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
