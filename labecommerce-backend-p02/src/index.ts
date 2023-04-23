
import express, { Request, Response} from 'express';
import cors from 'cors';
import { dataProducts } from './data/dataProducts';
import { dataPersons } from './data/dataPersons';
const app = express();

app.use(express.json());
app.use(cors());



app.get("/products", (req: Request, res: Response) => {
    
    res.send({products: dataProducts});
})

app.get("/users/list", (req: Request, res: Response) => {
    res.send({users: dataPersons});
})


app.get("/", (req: Request, res: Response) => {
    res.send({users: dataPersons});
})

app.listen(3113, () => {
    console.log("Servidor rodando na porta 3113");
});
