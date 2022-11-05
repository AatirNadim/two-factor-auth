const express = require('express')
console.log(typeof express)
const cors = require('cors')

const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended :true}));
app.use(express.json())
app.use(cors());
const users = [];
const generateId = () => Math.random().toString(36).substring(2, 10);

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server'});
})
app.post('/api/register', (req, res) => {
    const {email, password, tel, username} = req.body();
    console.log({email, password, tel, username});

    let result = users.filter((user) => user.email === email || user.tel === tel);
    if (result.length === 0) {
        const newUser = {id : generateId(), email : email, password : password, username : username, tel : tel}
        users.push(newUser);
        return res.json({message : 'User created successfully'});
    }
    res.json({error_message : 'User already exists'});
})

app.listen(PORT, () => console.log(`server listening on port --> ${PORT}`));