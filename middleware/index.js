import passport from 'passport';

export const ErrorMiddleware = async (error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message || 'Something went wrong';
    let stack = null;

    if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'qa') {
        message = error.message,
        stack = error.stack

        res
            .status(status)
            .send({
                status,
                message,
                stack,
            })
    }

    res
        .status(status)
        .send({
            status,
            message,
        })
}


export const auth = passport.authenticate('jwt', { session: false });


