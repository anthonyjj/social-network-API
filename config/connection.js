const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:271017/noSQL',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection
