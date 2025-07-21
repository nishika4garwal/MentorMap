import Server  from 'socket.io';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import isEmpty  from 'lodash';
import { authUser, login } from './sockets/user.js';
import User from '../Website-Backend/src/schema/UserSchema.js';
const secret = "something";
const uri = "mongodb+srv://mentorsync27:mentorsync27@mentorsync.z9ppb.mongodb.net/?retryWrites=true&w=majority&appName=MentorSync";

const io = new Server(8080);
const userSocket = io.of('/user');
console.log(userSocket);

mongoose.connect(uri).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
});

userSocket.on("connection", (socket) => {
    console.log('hi');
    socket.on("auth", (data) => {
        console.log('hi')
        authUser(socket, data)
    });
    socket.on("login", (data) => login(socket, data));
});

