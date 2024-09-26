const axios = require('axios');
const soapUrl = 'http://localhost:8000/api/soap';

async function registerClient(document, names, email, phone) {

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <registerClient xmlns="http://localhost/soap">
            <documento>${document}</documento>
            <nombres>${names}</nombres>
            <email>${email}</email>
            <celular>${phone}</celular>
        </registerClient>
    </soap:Body>
</soap:Envelope>`;
    try {
        const response = await axios.post(soapUrl, xml, {
            headers: {
                'Content-Type': 'application/xml',
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error en el servicio SOAP: ${error.message}`);
    }
}

async function checkBalance(document, phone) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <checkBalance>
            <document>${document}</document>
            <phone>${phone}</phone>
        </checkBalance>
    </Body>
</Envelope>`;

    try {
        const response = await axios.post(soapUrl, xml, {
            headers: {
                'Content-Type': 'application/xml',
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error en el servicio SOAP: ${error.message}`);
    }
}



module.exports = {
    registerClient,
    checkBalance,
};
