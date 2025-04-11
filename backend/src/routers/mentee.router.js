import { Router } from "express";
import { getAuth } from "@clerk/express"

const router = Router()


router.get('/', (req, res) => {
    const { userId } = getAuth(req)

    const { userId: userDbId } = req.body


    if (!userId && !userDbId) {
        return res.json({
            message: "User not present",
            data: null,
            error: "401 Unauthorized error"
        }).status(401)
    }

    

    return res.json({
        message: 'Succesfull'
    })
})


export default router;