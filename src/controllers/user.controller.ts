import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database/db';
import 'localstorage-polyfill';


// Lista todos os usuários
export const getUsersAll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response = await pool.query('Select * from usuarios');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        res.status(500).json('Erro na consulta');
    }    

}

// Lista Usuários por ID
export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    console.log(id);
    console.log(req.params.id);
    try{
        const response = await pool.query('Select * from usuarios where id = $1', [id]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        res.status(500).json('Erro na busca do usuario por ID');
    }
}

//Insere novo Usuario
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const { id, name, login, password, status } = req.body;
    try{
        const response = await pool.query('Insert Into Usuarios values ($1, $2, $3, $4, $5)',[id, name, login, password, status]);
        return res.status(201).json(`Usuário criado com sucesso - ID: ${id}`);
    }catch(e){
        console.log(e);
        res.status(500).json('Erro na criação do usuário');
    }
}