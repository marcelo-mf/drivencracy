import db from '../db.js';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
dotenv.config();

export async function pool(req, res) {

    const body = req.body;

    try{

        if(body.expireAt === '') {
            body.expireAt = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm') //COMO FAZER PARA ADICIONAR 30 DIAS
        }

        await db.collection('pools').insertOne(body);

        res.sendStatus(201);
        
    } catch {
        res.sendStatus(500)
    }
}

export async function getPools(req, res) {

    try{

        const pools = await db.collection('pools').find().toArray();

        res.send(pools);
        
    } catch {
        res.sendStatus(500)
    }
}

