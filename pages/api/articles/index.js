import mongoose from 'mongoose';
import Ticket from '../../../model/Ticket';
import dbConnect from '../../../util/mongo';
import { User } from '../../../model/User';

export default async function handler(req, res) {
    const { method, cookies } = req;

    const secret = process.env.ACCESS_TOKEN_SECRET;

    const token = cookies.jwt;

    const toId = mongoose.Types.ObjectId;

    // const token = req.headers.token;

    await dbConnect();

    if (method === 'GET') {
        if (!token) return res.status(401).json('You are not authenticated');
        jwt.verify(token, secret, (err, user) => {
            if (err) return res.status(403).json('Token is not valid!');
            if (user.userRole !== 'admin') {
                return res.status(401).json('You are not authorized');
            } else {
                req.user = user;
            }
        });
        if (req?.user?.userRole === 'admin') {
            try {
                const tickets = await Ticket.find().populate('sender', '-password');
                res.status(200).json(tickets);
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        }
    }

    if (method === 'POST') {
        if (!token) return res.status(401).json('You are not authenticated');
        jwt.verify(token, secret, (err, user) => {
            if (err) return res.status(403).json('Token is not valid!');
            if (user) {
                req.user = user;
            }
        });

        if (req.user) {
            try {
                req.body.sender = toId(req.user.userId);
                const user = await User.findById(req.body.sender.toString());
                const ticket = await Ticket.create(req.body);
                await user.updateOne({
                    $push: { tickets: ticket._id },
                });

                res.status(201).json(ticket);
            } catch (error) {
                console.log(error)
                res.status(500).json(error);
            }
        }
    }
}