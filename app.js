const express = require('express');
const { sendMail } = require('./emails');

const app = express();

app.use( express.json() )

app.post('/send-mail', (req, res) => {
    try {
        const user = req.body
        sendMail( user )
    } catch (error) {
        console.log(error);
    }
})

app.listen(8080, () => {
    console.log("server is running on port 8080");
})