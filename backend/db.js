const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://codemarkcodes:wYBOzrL49GfUIQG2@cluster0.f8odp.mongodb.net/luxurystayhospitality`)
  .then(() => console.log('Database Connected!'));