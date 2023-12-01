const express = require('express');
const qr=require('qrcode');
const bodyParser = require('body-parser');
var QRCode = require('qrcode');
const app = express();
const port=3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {    
    res.render('index',{src:null})
})
app.post('/',async (req, res) => {
    try{
        const url = req.body.data;
        const qrImage=await qr.toDataURL(url);
        res.render('index',{src:qrImage});
    } catch (err){
        res.render('index',{src:null});
    }
    });
app.listen(port, () =>console.log(`Listening on port ${port}`));