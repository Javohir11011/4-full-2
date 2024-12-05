import express from 'express'
import { authRouter, postRouter, commentRouter } from './src/routes/index.js'
import { sequelize } from './src/db/index.js'

const app = express()
app.use('/auth', authRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}

app.listen(5000)
