const http = require('http');
const fs = require('fs');
const generator = require('generate-password');
const nodemailer = require('nodemailer');

console.log("HELLO WORLD");

const PORT = 3000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node !!!!</h1>\n');
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('welcome.txt créé avec succès !');

    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Contenu de welcome.txt:', data);
    });
});

const password = generator.generate({
    length: 10,
    numbers: true,
});
console.log('Mot de passe généré:', password);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'malick0206@gmail.com',
        pass: 'lzhi bwew xued sjst',
    },
});

const mailOptions = {
    from: 'malick0206@gmail.com',
    to: 'hpluckyjohanpsyko@gmail.com',
    subject: 'Hello from Node.js!',
    text: 'Hello! This is an email sent from Node.js.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erreur lors de l\'envoi de l\'email:', error);
    } else {
        console.log('Email envoyé avec succès:', info.response);
    }
});
