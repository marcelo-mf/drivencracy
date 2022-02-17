import express from 'express';
import cors from 'cors';
import testeRouter from './routes/testeRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(testeRouter);

app.listen(process.env.PORT, () => {
    console.log('ok')
});