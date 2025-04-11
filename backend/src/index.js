import express from 'express';
import cors from 'cors'



const port = process.env.PORT || 8080;
const app = express()


app.use(cors())


import menteeRouter from './routers/mentee.router.js'
import mentorRouter from './routers/mentor.router.js'

app.use('/mentor', mentorRouter)
app.use('/mentee', menteeRouter)

app.listen(port, () => { 
    console.log(`Server is running on port http://localhost:${port}`);
})