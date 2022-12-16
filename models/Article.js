import mongoose from 'mongoose';
import validator from 'validator';
import User from './User';

// const options = {
//     discriminatorKey: 'role',
//     timestamps: true,
//   };


const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title'],
      },
      image: {
        type: String,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      category: {
        type: String,
        required: true
      },
      subcategory: {
        type: String,
        required: true
      },
      subsubcategory: {
        type: String,
        required: true
      },
      companies: {
        type: Array,
        default: [],
        required: true
      },
      comments: {
        type: Array,
        default: [],
      },
      likes: {
        type: Array,
        default: [],
      },
      dislikes: {
        type: Array,
        default: [],
      },
     
})
  

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
