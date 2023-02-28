import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
},
{
    toJSON: {
        // this will remove this fields from the response
        transform(doc, ret) {
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true
});

export default mongoose.model('Book', bookSchema);