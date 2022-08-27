import {videoRoute} from "./videos-router";
import {Request, Response,} from 'express';
import bodyParser from "body-parser";
import cors from 'cors'

const express = require('express')
const app = express()
app.use(cors())
app.use(bodyParser())

const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.use('/videos', videoRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})