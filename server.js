import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import connectDB from './db.js';

// 1. Load environment variables first
dotenv.config({ path: './.env' });

const app = express();

// 2. Initialize database connection
connectDB();

app.use(cors());
app.use(express.json());

// 3. Initialize the official Google Gen AI SDK client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.get('/', (req, res) => {
  res.send('Backend is running with Gemini AI');
});

app.post('/ask', async (req, res) => {
  try {
    const { question } = req.body;

    // Validate request body
    if (!question) {
      return res.status(400).json({ answer: 'Question text is required.' });
    }

    // 4. Request text generation via the updated active production model
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash', // Updated from old 2.5-flash
      contents: question,
    });

    // 5. Extract the generated string safely from the response structure
    const answer = response.text || 'No answer received from Gemini.';

    res.json({ answer });
  } catch (error) {
    console.error('Gemini SDK Error:', error);
    res.status(500).json({ 
      answer: 'Error connecting to Gemini AI',
      error: error.message || error
    });
  }
});

// 6. Bind to port
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// dotenv.config({ path: './.env' });

// const app = express();
// connectDB();
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Backend is running with Gemini AI');
// });

// app.post('/ask', async (req, res) => {
//   try {
//     const { question } = req.body;
    
//     // Updated to the current production Gemini 3.7 Flash model and Interactions API endpoint
//     // Ensure there is a dollar sign ($) before the curly brace {
// const response = await fetch(
//   `https://googleapis.com{process.env.GEMINI_API_KEY}`,
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       contents: [
//         {
//           parts: [{ text: question }],
//         },
//       ],
//     }),
//   }
// );



// const data = await response.json();
// console.log('Gemini response:', JSON.stringify(data, null, 2));

// let answer = 'No answer received from Gemini.';

// // Corrected condition to prevent crashes if candidates array is missing
// if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
//   answer = data.candidates[0].content.parts[0].text;
// } else if (data.error) {
//   answer = `API Error: ${data.error.message}`;
// }

// res.json({ answer });


//   } catch (error) {
//     console.error('Gemini Error:', error);
//     res.status(500).json({ answer: 'Error connecting to Gemini AI' });
//   }
// });


// app.listen(5000, () => {
//   console.log('🚀 Server running on http://localhost:5000');
// });