import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'solomon4chidera@gmail.com',
        pass: 'wskc krkv nhpr ygae'
    }
});

export async function sendEmail (fullName, email, message) {
    const options = {
        from: 'solomon4chidera@gmail.com',
        to: 'obuegbechidera@gmail.com',
        subject: 'email from client',
        html: `An email from ${fullName}, my email is ${email} phone no $ my message is ${message}`
    };
    try {
        if (!fullName || !email || !message) {
            return 'all fields are required'
        }
        await transporter.sendMail(options)
        return 'success'
    } catch (error) {
        return 'Error sending verification email'
    }
}