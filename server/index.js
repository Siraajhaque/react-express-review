// dependicies that come from npm
const express = require('express');
//parses json objects to body
const bodyParser = require('body-parser');
//generates logs when requests are being made
const morgan = require('morgan');
// secruity
const cors = require('cors');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3000;

// making sure the information is parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);
// app.use('/holyshitimstartingtogetthis', router);

app.get('/name', (req, res) => res.send('Siraaj!!!!'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`Server listening on port ${port}!!!`));
