import express from 'express'
import indexRout from './routers/index'

const app = express()
const PORT = process.env.PORT || 7575

app.use("/", indexRout)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});