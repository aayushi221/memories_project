import express from 'express';
import bodyparser from 'bodyparser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit : "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended:true}));
app.use(cors());

