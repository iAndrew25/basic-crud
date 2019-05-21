const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const notes = require('./note-controller');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/easy-notes', {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully connected to the database");    
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

app.get('/', (req, res) => {
	res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.post('/notes', notes.create);

app.get('/notes', notes.findAll);

app.get('/notes/:noteId', notes.findOne);

app.put('/notes/:noteId', notes.update);

app.delete('/notes/:noteId', notes.delete);

app.listen(8081, () => {
	console.log("Server is listening on port 3000");
});