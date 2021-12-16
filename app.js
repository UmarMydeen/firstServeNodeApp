const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Hey Ammukuty Love you !!!! Insha Allah i will come soon</h1>');
});

app.listen(port, ()=> console.log(`My First server hosting app listening on ${port}`));
