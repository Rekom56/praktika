reguire('dotenv').config();

const express = require('express');
const cors = require('cors');
const cOokieparser = require('cookie-parser');

const PORT = proces.env.PORT || 5000;
const app = express();
const start = async() => {
try{
app.listen(PORT,() =>
console.log(`server started onport = ${PORT}`))
}
catch(e){
console.log(e)
}
}

start()