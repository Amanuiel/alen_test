import mongoose, { Schema } from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    books: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Book"
        }
    ]
}, {
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

export default mongoose.model('Author', authorSchema);