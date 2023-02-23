import Author from '../models/Author.js';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const Signup = async (req, res, next) => {
    const { email, password, name, bio } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'You must enter an email address.' });
    }

    if (!password) {
        return res.status(400).json({ error: 'You must enter a password.' });
    }

    const exeAuthor = await Author.findOne({ email });

    if (exeAuthor) {
        return res
            .status(400)
            .json({ error: 'That email address is already in use.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const author = await Author.create({
        name, email, bio, password: hash
    });

    res.status(200).json({
        success: true,
        message: 'Account Successfully Registered',
        data: author
    });
}


export const Login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'You must enter an email address.' });
    }

    if (!password) {
        return res.status(400).json({ error: 'You must enter a password.' });
    }

    const user = await Author.findOne({ email });

    if (!user || !user.password) {
        return res
            .status(400)
            .send({ error: 'No user found for this email address.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            success: false,
            error: 'Incorrect password.'
        });
    }

    const payload = {
        id: user._id,
        email: user.email,
    };


    jwt.sign(payload, process.env.APP_SECRET_KEY, { expiresIn: '1d' }, (error, token) => {
        res.status(200).json({
            success: true,
            token: `${token}`,
            user: {
                id: user.id,
                Name: user.name,
                email: user.email,
            }
        });
    });
}