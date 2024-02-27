import {
    bf_connection
} from '../config/index.js'
import {
    generateToken
} from '../middleware/userAuthentication.js'
import {
    hash,
    compare
} from 'bcrypt'

class Users{
    fetchUsers(req, res) {
        const dbQry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPass, userRole
        FROM users;
        `
        bf_connection.query(dbQry, (error, results) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const dbQry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPass, userRole
        FROM users
        WHERE userID = ${req.params.id};
        `
        bf_connection.query(dbQry, (error, result) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                result
            })
        })
    }
    async createUser(req, res) {
        // Payload
        let data = req.body
        data.userPass = await hash(data?.userPass, 10)
        let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        const dbQry = `
        INSERT INTO users
        SET ?;
        `
        bf_connection.query(dbQry, [data], (error) => {
            if (error) {
                res.json({
                    status: res.errorCode,
                    message: 'An account already exists with this email. Please login.'
                })
            } else {
                // generate a token
                let token = generateToken(user)
                res.json({
                    status: res.errorCode,
                    token,
                    message: 'You\'re registered'
                })
            }
        })
    }
    async updateUser(req, res) {
        const data = req.body
        if (data?.userPass) {
            data.userPass = await hash(data?.userPass, 10)
        }

        const dbQry = `
        UPDATE users
        SET ?
        WHERE userID = ${req.params.id};
        `
        bf_connection.query(dbQry, [data], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "The user information is updated."
            })
        })
    }
    deleteUser(req, res) {
        const dbQry = `
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `
        bf_connection.query(dbQry, (err) => {
            if(error) throw error 
            res.json({
                status: res.errorCode,
                message: "User is successfully deleted"
            })
        })
    }
    login(req, res) {
        const {
            emailAdd,
            userPass
        } = req.body
        const dbQry = `
        SELECT userID, firstName, lastName, 
        userAge, gender, emailAdd, userPass, userRole
        FROM users
        WHERE emailAdd = '${emailAdd}';
        `
        bf_connection.query(dbQry, async (error, result) => {
            if (error) throw error
            if (!result?.length) {
                res.json({
                    status: res.errorCode,
                    message: "Incorrect email entered. Please try again"
                })
            } else {
                // Validate password
                const validatePass = await compare(userPass, result[0].userPass)
                if (validatePass) {
                    const token = generateToken({
                        emailAdd,
                        userPass
                    })
                    res.json({
                        status: res.errorCode,
                        message: "Login Successful",
                        token,
                        result: result[0]
                    })
                } else {
                    res.json({
                        status: res.errorCode,
                        message: "Incorrect password entered. Please try again."
                    })
                }
            }
        })
    }
}

export {
    Users
}