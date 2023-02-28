// Import Modules
import bycrypt from 'bcryptjs';
import Local from 'passport-local';

// Import Databases
import { models } from '../databases/models';
import { User } from '../databases/entities';

// Define Validate Password
const validatePassword = (user: User, password: string): boolean => {
    return bycrypt.compareSync(password, user.password);
};

// Define Local Strategy
const localStrategy = new Local.Strategy((username, password, done) => {
    models.auth
        .findOneByUsername({ username })
        .then((user) => {
            if (user && validatePassword(user, password)) {
                done(null, user);
            } else {
                done(new Error('invalid username or password'));
            }
        })
        .catch((err) => done(err));
});

// Export Local Strategy
export { localStrategy };
