const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    activite: String,
    tva: Number,
    prix: Number,
    designation: String,
    unite: String,
});

const InvoiceData = mongoose.model('InvoiceData', invoiceSchema);

module.exports = InvoiceData;