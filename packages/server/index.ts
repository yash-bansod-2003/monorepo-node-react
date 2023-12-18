import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ msg: 'Hello from node ts serer' });
})

app.listen(5000, () => console.log('server started on port 5000'));


