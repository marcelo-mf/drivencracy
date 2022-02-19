import express from 'express';
import cors from 'cors';
import poolRouter from './routes/poolRouter.js';
import choiceRouter from './routes/choiceRouter.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(poolRouter);
app.use(choiceRouter);

app.listen(process.env.PORT, () => {
    console.log('ok')
});