const express = require('express');
const app = express();

const userRoutes = require('./Routes/userRoutes/userRoutes');
const dbConnection = require('./DB/Connection/dbConnection');

dbConnection();

app.use(express.json());
app.use('/user', userRoutes);

app.listen(9001, () => {

    console.log('Server is running on port 9001');
}
);
