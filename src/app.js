import express from 'express';
import cors from 'cors';
import poolRouter from './routes/poolRouter.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(poolRouter);

app.listen(process.env.PORT, () => {
    console.log('ok')
});