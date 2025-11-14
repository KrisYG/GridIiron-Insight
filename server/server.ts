const express = require('express')
const app = express()

app.get("/api", (req: any, res: any) => {
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})

// app.listen(5000, () => {
//     console.log("Server started on PORT: 5000") 
// });