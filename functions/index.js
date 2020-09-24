// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
    return admin.firestore().collection("notifications")
        .add(notification)
        .then(doc => {
            console.log("Notification added", doc)
        })
};

exports.projectCreated = functions.firestore
    .document("articles/{articleId}").onCreate(doc => {
        const project = doc.data;
        const notification = {
            content: "A new project added",
            author: `${project.author.firstName} ${project.author.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    }
)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
