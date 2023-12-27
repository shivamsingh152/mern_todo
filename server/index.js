import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './modals/db.js';
import Routes from './routes/routes.js';

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({extended: true }));

app.use('/', Routes);

const PORT = process.env.PORT || 7000;

// database
connection();

app.listen(PORT, ()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
});

app.get('/', (req,res) =>{
    res.send('hello server')
})