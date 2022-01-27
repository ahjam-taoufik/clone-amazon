const functions = require("firebase-functions");
const express=require("express")
const cors=require("cors")
const stripe=require("stripe")('sk_test_51KMaunGLalIISG5UrLsEGnxLrSgU6NkpR8iY8nRQpAcXoCA0T9gO1G25X4H6jios5E8EL7uvuPM3CIft3reOnFSj00DWPgSWCl')


//API


//App config
const app=express()


//Middlewares
app.use(cors({origin: true}))
app.use(express.json())

//API routes
app.get('/',(request,response)=>response.status(200)
.send('Hello Word')
)

app.post('/payments/create', async (req,res)=>{
    const total=req.query.total
    console.log('Payment Request Recieved', total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})


//Listen command
exports.api=functions.https.onRequest(app)
























// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

