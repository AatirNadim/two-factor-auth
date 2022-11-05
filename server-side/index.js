const express = require('express')
console.log(typeof express)
const cors = require('cors')

const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended :true}));
app.use(express.json())
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server'});
})

app.listen(PORT, () => console.log(`server listening on port --> ${PORT}`));