import mongoose from 'mongoose';
import Article from '../../../model/Article';
import dbConnect from '../../../lib/mongo';
import { User } from '../../../model/User';

export default async function handler(req, res) {
    const { method, cookies } = req;
    await dbConnect();


    //Get All Articles
    // if (method === 'GET') {
    //     if (!token) return res.status(401).json('You are not authenticated');
    //     jwt.verify(token, secret, (err, user) => {
    //       if (err) return res.status(403).json('Token is not valid!');
    //       if (user.userRole !== 'admin') {
    //         return res.status(401).json('You are not authorized');
    //       } else {
    //         req.user = user;
    //       }
    //     });
    //     if (req?.user?.userRole === 'admin') {
    //       try {
    //         const tickets = await Ticket.find().populate('sender', '-password');
    //         res.status(200).json(tickets);
    //       } catch (error) {
    //         console.log(error);
    //         res.status(500).json(error);
    //       }
    //     }
    //   }
    
}