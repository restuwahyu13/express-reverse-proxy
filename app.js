const express = require('express')
const axios = require('axios');
const cors = require('cors');
const logger = require('morgan');
const app = express();

app.use(express.json())
app.use(cors());
app.use(logger('dev'));
app.enable('trust proxy');
app.disable('x-powered-by');;

app.get('/api/v2/users', async (req, res) => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
	res.json(data);
})

app.listen(3001, () => console.log('server is running on port 3001'));