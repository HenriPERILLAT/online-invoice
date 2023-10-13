const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); // Allows cross-origin requests
const app = express();
app.use(cors());
app.use(express.json());
const InvoiceData = require('./models/InvoiceSchema');
mongoose.connect('mongodb://localhost:27017/serviceData', { useNewUrlParser: true, useUnifiedTopology: true });

// const fs = require('fs');
// const csv = require('csv-parser');
// const InvoiceSchema = require('./models/InvoiceSchema');

// fs.createReadStream('./data.csv')
//     .pipe(csv({ separator: ';' }))
//     .on('data', async (row) => {
//         try {
//             const service = new InvoiceSchema({
//                 ACTIVITE: row.ACTIVITE,
//                 TVA: row.TVA,
//                 PRIX: row.PRIX,
//                 DESIGNATION: row.DESIGNATION,
//                 UNITE: row.UNITE,
//             });

//             await service.save();
//             console.log('Saved:', service);
//         } catch (error) {
//             console.error(error);
//         }
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     });


app.get('/api/invoiceData', async (req, res) => {
    try {
        const data = await InvoiceData.find(); // Use your model name
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));