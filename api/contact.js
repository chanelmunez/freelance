// Vercel serverless version of the /api/contact route in server.js
module.exports = (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, email, message, phone } = req.body || {};
    console.log('api contact', name, email, message, phone);

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Please provide name, email, and message'
        });
    }

    res.json({
        success: true,
        data: {
            name,
            email,
            message,
            phone: phone || null
        }
    });
};
