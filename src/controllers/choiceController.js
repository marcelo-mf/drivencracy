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

export async function vote(req, res) {

    try{

        const choiceId = req.params.id;
       
        const choice = await db.collection('choices').findOne({_id: ObjectId(choiceId)});
        if(!choice){
            return res.sendStatus(404)
        }

        const pool = await db.collection('pools').findOne({_id: ObjectId(choice.poolId)});
        const expired = dayjs().isAfter(pool.expireAt);
        if(expired) {
            return res.sendStatus(403)
        }

        const vote = {createdtedAt: dayjs().locale('pt-br').format('YYYY-MM-DD HH:mm'), choiceId: choice._id};
        await db.collection('votes').insertOne(vote);

        const votes = choice.votes;
        if(!votes){
            await db.collection('choices').updateOne({_id: ObjectId(choiceId)}, {$set: {votes: 1}})
        } else {
            await db.collection('choices').updateOne({_id: ObjectId(choiceId)}, {$set: {votes: votes + 1}})
        }

        res.sendStatus(201)
        
    } catch (error){

        console.log(error)
        res.sendStatus(500)

    }
}



