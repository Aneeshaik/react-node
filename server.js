const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('public'));
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});
app.use('/react',express.static(__dirname + '/react-mode/dist'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/landing.html')
})

app.get('/react', (req, res) => {
  res.sendFile(__dirname + '/react-mode/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})