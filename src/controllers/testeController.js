import db from '../db.js';
import dotenv from 'dotenv';
dotenv.config();

export async function controllerTeste(req, res) {


    try{


        res.send('ok');

    } catch {
        res.sendStatus(500)
    }
}

