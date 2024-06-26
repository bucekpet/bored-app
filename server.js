import express from 'express';
import path from 'path';

const app = express()
const port = process.env.PORT || 5050;

app.use(express.static(path.join('.', 'dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join('.', 'dist', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})