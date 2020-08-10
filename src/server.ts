import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.use('/', (req: any, res: any, next: any) => {
    console.log('---------------------------');
    console.log('Request Params: ', req.params);
    console.log('Request Body', req.body);
    console.log('Request Headers: ', req.headers);
    console.log('IP: ', req.ip);
    console.log('Data: ', new Date());
    next();

});

app.listen(port);
console.log(`Servidor escutando na porta ${port}`);




