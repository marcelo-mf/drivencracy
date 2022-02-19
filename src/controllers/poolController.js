import db from '../db.js';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

dotenv.config();

export async function pool(req, res) {

    const body = req.body;
    

    try{

        if(body.expireAt === '') {
            body.expireAt = dayjs().add(30, 'day').locale('pt-br').format('YYYY-MM-DD HH:mm')
        }

        const createdPoll = await db.collection('pools').insertOne(body);
        const pollRes = await db.collection('pools').findOne({_id: createdPoll.insertedId});

        res.status(201).send(pollRes);
        
    } catch(error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getPools(req, res) {

    try{

        const pools = await db.collection('pools').find().toArray();

        res.send(pools);
        
    } catch(error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getChoices(req, res) {

    const id = req.params.id;
    console.log(id);

    try{

        const poolExists = await db.collection('pools').findOne({_id: ObjectId(id)});
        console.log(poolExists)

        if(!poolExists) {
            return res.sendStatus(404)
        }

        const choices = await db.collection('choices').find({poolId: id}).toArray();
        
        res.status(201).send(choices);
        
    } catch (error){

        console.log(error)
        res.sendStatus(500)
        
    }
}



