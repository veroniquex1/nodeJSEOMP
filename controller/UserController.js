import express from 'express'
import bodyParser from 'body-parser'
import {
    Users
} from "../model/Users.js"
import {
    verifyToken
} from '../middleware/userAuthentication.js'

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    try {
        Users.fetchUsers(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: 'Cannot retrieve users. Please try again later'
        })
    }
})
userRouter.get('/:id', (req, res) => {
    try {
        Users.fetchUser(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: 'Cannot retrieve specified user. Please try again.'
        })
    }
})
userRouter.post('/register', bodyParser.json(), (req, res) => {
    try {
        Users.createUser(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: 'Could not add a new user. Please try again'
        })
    }
})
userRouter.patch('/update/:id', bodyParser.json(),
    (req, res) => {
        try {
            Users.updateUser(req, res)
        } catch (error) {
            res.json({
                status: res.errorCode,
                message: "Could not update user. Please try again."
            })
        }
    })
userRouter.delete('/delete/:id', (req, res) => {
    try {
        Users.deleteUser(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: "Could not delete user. Please try again"
        })
    }
})
userRouter.post('/login', bodyParser.json(), (req, res) => {
    try {
        Users.login(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: "Login unsuccessful"
        })
    }
})

export {
    userRouter, express
}