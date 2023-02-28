import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
} from 'passport-jwt';

import Author from '../models/Author.js';

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
  secretOrKey: process.env.APP_SECRET_KEY || 'secret',
};

passport.use(
  new JwtStrategy( jwtOpts , (payload, done) => {
    Author.findById(payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(error => {
        return done(error, false);
      });
  })
);
