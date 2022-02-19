import db from '../db.js';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
import { ObjectId } from 'mongodb'

dotenv.config();

export async function postChoice(req, res) {

    const id = req.body.poolId
    console.log(req.body)

    try{

        const poolExists = await db.collection('pools').findOne({_id: ObjectId(id)});

        if(!poolExists) {
            return res.sendStatus(404)
        }

        const titleExists = await db.collection('choices').findOne({title: req.body.title})

        if(titleExists) {
            return res.sendStatus(409);
        }

        const expire = dayjs().isAfter(poolExists.expireAt);
        
        if(expire) {
            return res.sendStatus(403);
        }

        await db.collection('choices').insertOne(req.body);
        
        res.sendStatus(201);
        
    } catch (error){

        console.log(error)
        res.sendStatus(500)

    }
}



