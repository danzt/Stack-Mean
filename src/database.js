const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean-enployees', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(db => console.log('Is Connect DB'))
    .catch(err => console.error(err))