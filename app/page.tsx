"use client";

import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  async function generateQuiz() {
    setLoading(true);
    setLoading(false);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();
    setQuiz(data.quiz);
    setLoading(false);
  }
  function revealAnswers() {
    setShowAnswers(true);
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-bold mb-4">
          AI Quiz Generator
        </h1>

        <p className="text-gray-600 mb-6">
        Enter a topic and generate quiz questions with AI
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Demo AI learning tool built with Next.js and Gemini API
        </p>

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic (e.g. Java Basics)"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={generateQuiz}
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Quiz"}
        </button>

        {quiz && (
  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
    <pre className="whitespace-pre-wrap text-sm mb-4">
      {showAnswers
        ? quiz
        : quiz.replace(/^Correct Answer:.*$/gm, "")}
    </pre>

    {!showAnswers && (
      <button
        onClick={revealAnswers}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Show Answers
      </button>
    )}

    {showAnswers && (
      <p className="mt-3 text-green-600">
        Answers are now visible.
      </p>
    )}
  </div>
)}

      </div>
    </main>
  );
}