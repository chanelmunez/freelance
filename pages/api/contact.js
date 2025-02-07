export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message, phone } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message'
    });
  }

  console.log('api contact', name, email, message, phone);

  // Here you would typically save to a database or send an email
  // For now, we'll just return success
  res.status(200).json({
    success: true,
    data: {
      name,
      email,
      message,
      phone: phone || null
    }
  });
}
