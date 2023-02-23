
import Book from '../models/Book.js'
import Author from '../models/Author.js'

//get all authors
export const getAllAuthors = async (req, res) => {
    const authors = await Author.find({})
    return res.status(200).json({ authors });
}

//get author by id
export const getAuthor = async (req, res) => {
    const author = await Author.findById(req.params.id);

    if (!author) { 
        return res.status(404).json({ message: 'Author not found' });
    }

    return res.status(200).json({ author });
}

//add new author
export const insertAuthor = async (req, res) => {
    try {
        const authorData = await Author.create({ ...req.body });
        return res.status(201).json({ authorData });
    } catch (err) {
        return res.status(400).json({ err });
    }
}

//updating author data
export const updateAuthor = async (req, res) => {
    console.log("id: " + req.params.id)
    try {
        const author = await Author.findById(req.params.id);

        if (!author) { 
            return res.status(404).json({ message: 'Authors not found' });
        }

        author.name = req.body.name;
        author.bio = req.body.bio;
        author.books = req.body.books
        
        await author.save();

        return res.status(201).json({ author });
    } catch (err) {
        return res.status(404).json({ message: 'Author not found' });
    }
}

//deleting a author
export const removeAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);

        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }

        await Author.findByIdAndDelete(req.params.id);
        return res.status(200).json({ author });
    } catch (err) { 
        return res.status(404).json({ message: 'Author not found' });
    }
}
