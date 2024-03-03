const mongoose = require('mongoose')

const connectionString = `mongodb+srv://cyrusa2541:compscirules123@cyrusics4u.f3ehg78.mongodb.net?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('Database connected')).catch((err)=> console.log(err))