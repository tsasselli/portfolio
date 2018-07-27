const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessageEmail = functions.firestore.document('messages/{pushKey}').onWrite(event => {
    const snapshot = event.data
    // Only send email for new messages.
    if (snapshot.previous.val() || !snapshot.val().name) {
        return;
    } else {

    const val = snapshot.val();

    const mailOptions = {
        to: 'travis.sasselli@gmail.com',
        subject: `Information Request from ${val.name}`,
        text: val.message
    };
    return mailTransport.sendMail(mailOptions).then(() => {
        return console.log('Mail sent to: test@example.com')
    });
}});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
