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
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error en el servicio SOAP: ${error.message}`);
    }
}

async function rechargeWallet(document, phone, amount) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <rechargeWallet>
            <document>${document}</document>
            <phone>${phone}</phone>
            <amount>${amount}</amount>
        </rechargeWallet>
    </Body>
</Envelope>`;

    try {
        const response = await axios.post(soapUrl, xml, {
            headers: {
                'Content-Type': 'application/xml',
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error en el servicio SOAP: ${error.message}`);
    }
}

async function pay(document, phone, amount) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <pay>
            <document>${document}</document>
            <phone>${phone}</phone>
            <amount>${amount}</amount>
        </pay>
    </Body>
</Envelope>`;

    try {
        const response = await axios.post(soapUrl, xml, {
            headers: {
                'Content-Type': 'application/xml',
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error en el servicio SOAP: ${error.message}`);
    }
}

async function confirmPayment(session_id, token) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <confirmPayment>
            <session_id>${session_id}</session_id>
            <token>${token}</token>
        </confirmPayment>
    </Body>
</Envelope>`;

    try {
        const response = await axios.post(soapUrl, xml, {
            headers: {
                'Content-Type': 'application/xml',
            },
            withCredentials: true,
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
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error en el servicio SOAP: ${error.message}`);
    }
}



module.exports = {
    registerClient,
    rechargeWallet,
    pay,
    confirmPayment,
    checkBalance,
};
