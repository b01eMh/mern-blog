import app from './app';
import env from './util/validateEnv';
import mongoose from 'mongoose';

const PORT = env.PORT;
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch(console.error);
