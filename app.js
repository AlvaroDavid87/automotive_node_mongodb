const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const dotenv = require('dotenv');

const app = express();


// load env variables
dotenv.config()

// db connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
    
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});
    

app.use(morgan('dev'));

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`A Node Js API is listening on port : ${port}`)});