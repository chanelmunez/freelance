const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('dist'));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message, phone } = req.body;
    console.log('api contact', name, email, message, phone);
    
    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Please provide name, email, and message'
        });
    }

    // Here you would typically save to a database or send an email
    // For now, we'll just return success
    
    res.json({
        success: true,
        data: {
            name,
            email,
            message,
            phone: phone || null
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
