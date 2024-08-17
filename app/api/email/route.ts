import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

export async function POST(request: NextRequest) {

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  try {
    const mail = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: subject,
      html: `
        <p>Contact received from web portfolio:</p>
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
      `,
    })

    return NextResponse.json({ 
      status: 200,
      message: "Mail successfully delivered." 
    })

  } catch (error) {
    return NextResponse.json({ 
      status: 500,
      message: "Mail failed to be delivered." 
    })
  }
}