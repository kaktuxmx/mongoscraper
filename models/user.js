var Schema = mongoose.Schema;

var Usermodel = new Schema({

    name: string,

});

var User = mongoose.model("User", Usermodel);

module.exports = Note;