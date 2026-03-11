# AI Quiz Generator

A small full-stack web application that generates multiple-choice quiz questions from any topic using AI.

Users can enter a topic such as **Java Basics**, **Machine Learning**, or **Data Structures**, and the application will automatically generate quiz questions using the **Google Gemini API**.

---

## Features

- Generate 3 quiz questions from a user-provided topic
- AI-powered content generation with Gemini API
- Simple interactive quiz interface
- Reveal answers with a button

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Gemini API

---

## Project Description

This project is a small demo of an **AI-powered learning tool**.

A user enters a topic such as **Java Basics** or **Machine Learning**, and the app generates quiz questions automatically.

The frontend was built with **Next.js and React**.  
The backend uses a **Next.js API route** to call the **Gemini API**.

---

## Screenshots

### 1. Home Page
![Home](./public/screenshot-home.png)

### 2. Quiz Generated
![Quiz](./public/screenshot-generate.png)

### 3. Show Answers
![Answer](./public/screenshot-answer.png)

---

## How to Run

### 1. Clone the repository


git clone https://github.com/YangruipengYou/ai-quiz-generator.git


### 2. Install dependencies

```bash
npm install
3. Create environment file

Create a file called .env.local in the root directory:

GEMINI_API_KEY=your_api_key_here
4. Start the development server
npm run dev
5. Open the app in your browser
http://localhost:3000
Future Improvements

Possible improvements for this project:

Multiple question formats

User answer selection and scoring

Saving quiz history

Improved UI/UX

Difficulty levels for questions

Author

Yangruipeng You
Computer Science Student
