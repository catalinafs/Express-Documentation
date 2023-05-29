const express = require('express');
const app = express();
const path = require('path')

// app.get('/', (req,res) => {
//     // res.send('Holis Serve')
//     res.sendFile(path.join(__dirname + "/index.html"))
// })

app.use(express.static(path.join(__dirname + '/src')))

app.listen(3100, () => {
    console.log('The Serve is working well🚀');
})