// dependencies
const express = require('express');
const app     = express();
const PORT    = 2000;

//middleware
app.use(express.static('public'));

// listener
app.listen(PORT, () => console.log('noticeboard is on port: ', PORT));


