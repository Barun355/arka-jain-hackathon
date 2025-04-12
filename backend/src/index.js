import express from 'express';
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express'


const port = process.env.PORT ;

console.log(port)
const app = express()


app.use(cors())
app.use(express.json({ extends: true }))
app.use(helmet())


import menteeRouter from './routers/mentee.router.js'
import mentorRouter from './routers/mentor.router.js'
import onboardingRouter from './routers/onboarding.router.js'


app.use(clerkMiddleware())
app.use('/api/v1/mentor', requireAuth,  mentorRouter)
app.use('/api/v1/mentee', requireAuth,  menteeRouter)
app.use('/api/v1/onboarding', onboardingRouter)

app.listen(port, () => { 
    console.log(`Server is running on port http://localhost:${port}`);
})