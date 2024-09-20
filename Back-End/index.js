import express from 'express';
import bodyparser from 'body-parser'

import userRoute from './routes/users.js'

const app = express();

const PORT = 3000

app.use(bodyparser.json())

app.use('/users', userRoute)

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send("Hello from homepage")
})


app.listen(PORT, () => console.log("Server running on port:", PORT))