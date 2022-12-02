import { MongoClient } from 'mongodb';
// password: 2zB69lybhlastxeE
export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://skander:2zB69lybhlastxeE@cluster0.mkybdvp.mongodb.net/?retryWrites=true&w=majority');
    return client;
}