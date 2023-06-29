const express = require("express");
const app = express();
app.use((req, res, next) => {
    //设置一个
    //res.setHeader()
    //res.header == res.set
    res.header({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers':'Content-Type'
    })
    next();
})
app.get("/getlist",(req, res) => (
    res.json({
        // status:200,
        code:200,
        data: { a : 1 },
        msg: "成功"
    })
))