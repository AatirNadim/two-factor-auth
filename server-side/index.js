const express = require('express')
console.log(typeof express)
const cors = require('cors')

const {Novu} =require('@novu/node')
const novu = new Novu('ffcb48d5d79dbd45604f30add7034e0f');


const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended :true}));
app.use(express.json())
app.use(cors());
const users = [];
const generateId = () => Math.random().toString(36).substring(2, 10);

const generateCode = () => Math.random().toString(36).substring(2, 12);
const sendNovuNotification = async (recipient, verificationCode) => {
    try {
        let response = await novu.trigger("sendsms", {
            to: {
                subscriberId : recipient, 
                phone: recipient,
            },
            payload: {
                code : verificationCode,
            },
        });
        console.log({response});
    }
    catch(err) {
        console.error(err);
    }
};

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


app.post('/api/login', (req, res) => {
    const {email, password} = req.body();
    let result = users.filter((user) => email === user.email && password === user.password);

    if(result.length !== 1) {
        return res.json({error_message : 'Incorrent Credentials'});
    }
    res.json({message : 'Login Successfull!!', 
                data : {
                    username : result[0].username}, });
});

app.listen(PORT, () => console.log(`server listening on port --> ${PORT}`));