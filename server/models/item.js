console.log('models/item.js');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = global.Promise;


var itemSchema = new Schema({
 name: {type: String, required: true, minlength: 4},
 description: {type: String, required: true, minlength: 4, maxlength: 250},
 _category: {type: Schema.Types.ObjectId, ref: 'Category'},	
 donor: {type: String, default: 'anonymous'},
 restrictions: {type: String, maxlength: 250},
 value: Number,
 
 photo: {type: String},
 _package: {type: Schema.Types.ObjectId, ref: 'Package'}
}, { timestamps: true });





itemSchema.plugin(autoIncrement.plugin, {model: 'Item', field: 'itemId', startAt: 1000});
module.exports = mongoose.model('Item', itemSchema);

// mongoose.model('Item', itemSchema);

// var Item = mongoose.model('Item');