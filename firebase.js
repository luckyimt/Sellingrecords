const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function sendToCloud(record){

    db.collection("sales").add(record)
    .then(() => {
        alert("Saved to cloud!");
    })
    .catch(err => {
        console.error(err);
    });

}