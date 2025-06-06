//app.ts
import express, { Request, Response } from 'express'

const app = express()

app.use('/api/users')

const PORT = process.env.PORT || 3000

app.get('/',(req: Request, res: Response)=>{
    res.send('Hello from TypeScript')
})

app.listen(PORT,()=>{
    console.log(`App Running in the port ${PORT}`)
})

//users.ts
import { Router } from "express";
import { getUser, getUserbyId } from "../handlers/userHandlers";

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.get('/:id', getUserbyId)

export default userRouter

//userHandlers.ts
import { Request, Response } from "express";
import { CreateUser } from "../DTOs/CreateUser.dto";

export function getUser(req: Request<{}, {}, CreateUser>, res: Response) {
  res.send([]);
}

export function getUserbyId(req: Request<CreateUser>, res: Response) {
    let email = req.params.id ;
    res.send({})
}


//CreateUser.dto.ts
export interface CreateUser {
    id: number,
    username: string,
    email: string,
    password: string
}