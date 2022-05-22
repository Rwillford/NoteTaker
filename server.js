const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db')
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes')
app.use(express.static('public'));
app.use(express.json())
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})