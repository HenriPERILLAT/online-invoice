const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    ACTIVITE: String,
    TVA: Number,
    PRIX: Number,
    DESIGNATION: String,
    UNITE: String,
});

const InvoiceData = mongoose.model('InvoiceData', invoiceSchema);

module.exports = InvoiceData;