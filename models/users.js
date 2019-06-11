const db = require('./conn.js');

class User {
    constructor(id, first_name, last_name , email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    async createUser() {
        try {
            const response = await db.one(`
            insert into users
                (first_name, last_name, email, password)
            values
                ($1, $2, $3, $4)
            returning id`, [this.first_name, this.last_name, this.email, this.password]);
            return response;
        } catch(err) {
            return err.message
        }
    }

    static async userExists(email) {
        try {
            const response = await db.one(`
            select *
            from users
            where email='${email}'
            `)
            return response;
        } catch(err) {
            return err.message
        }
    }

}

module.exports = User;