import React, { useState, useEffect } from 'react';
import easyinvoice from 'easyinvoice';
export default function Invoice({ invoiceData }) {
    const EasyInvoiceSample = () => {
        const [invoiceBase64, setInvoiceBase64] = useState('');
    }
    const createInvoice = async () => {
        const data = getSampleData();
        const result = await easyinvoice.createInvoice(data);
        setInvoiceBase64(result.pdf);
    };

    const downloadInvoice = async () => {
        const data = getSampleData();
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download('myInvoice.pdf', result.pdf);
    };

    const renderInvoice = async () => {
        document.getElementById('pdf').innerHTML = 'loading...';
        const data = getSampleData();
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.render('pdf', result.pdf);
    };

    const getSampleData = () => {
        return {
            "currency": "USD", //See documentation 'Locales and Currency' for more info
            "taxNotation": "vat", //or gst
            "marginTop": 25,
            "marginRight": 25,
            "marginLeft": 25,
            "marginBottom": 25,
            "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png", //or base64
            "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
            "sender": {
                "company": "Sample Corp",
                "address": "Sample Street 123",
                "zip": "1234 AB",
                "city": "Sampletown",
                "country": "Samplecountry"
            },
            "client": {
                "company": "Client Corp",
                "address": "Clientstreet 456",
                "zip": "4567 CD",
                "city": "Clientcity",
                "country": "Clientcountry"
            },
            "invoiceNumber": "2021.0001",
            "invoiceDate": "1.1.2021",
            "products": [
                {
                    "quantity": "2",
                    "description": "Test1",
                    "tax": 6,
                    "price": invoiceData.totalAmount
                }
            ],
            "bottomNotice": "Kindly pay your invoice within 15 days.",
        };
    };
    return (
        <div>
            <button onClick={createInvoice}>Create Invoice</button>
            <button onClick={downloadInvoice}>Download Invoice</button>
            <button onClick={renderInvoice}>Render Invoice</button>
            <br />
            <br />
            <p>
                {/* Invoice Base64 (click create invoice): <small>{invoiceBase64}</small> */}
            </p>
            <div id="pdf"></div>
        </div>
    )
}