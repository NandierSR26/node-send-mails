const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid')

const createTransport = () => {
    // const transport = nodemailer.createTransport({
    //     host: process.env.HOST,
    //     port: process.env.PORT,
    //     auth: {
    //         user: process.env.USER,
    //         pass: process.env.PASS
    //     }
    // });

    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: process.env.APIKEY
        })
    )

    return transport;
}

const sendMail = async (user) => {
    const transporter = createTransport();
    const info = await transporter.sendMail({
        from: 'nandier.ruiz@gmail.com', // sender address
        to: `${user.email}`, // list of receivers
        subject: `Hola ${user.name}, Bienvenido`, // Subject line
        text: "Bienvenido",
        html: "<h1>Hello world?</h1>", // html body
        attachments: [
            {   // use URL as an attachment
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
        ]
    })

    console.log("Message sent: %s", info.messageId);

    return
}

module.exports = {
    sendMail
}