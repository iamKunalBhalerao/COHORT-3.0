import express, { Express, Request, Response } from "express"

const app: Express = express();

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Everything is OK"
    })
})

app.listen(3001, () => {
    console.log("HTTP-Server is running...")
})
