const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
    res.json({msg: "Hello I am Backend"})
})

app.listen(port, [host='0.0.0.0']);
