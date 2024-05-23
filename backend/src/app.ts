import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import NoteModel from './models/note';

const app = express();

app.get('/', async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
});

// 404 endpoint
app.use((req, res, next) => {
  next(Error('Endpoint not found.'));
});

// Error handling
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred.';
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
