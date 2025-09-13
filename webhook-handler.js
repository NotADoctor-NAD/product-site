const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GitHub configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;

// Pre-order form webhook
app.post('/webhook/pre-order', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, quantity, color, specialRequests } = req.body;
    
    // Calculate total price
    const basePrice = 249.99;
    const totalPrice = (basePrice * quantity).toFixed(2);
    
    // Trigger GitHub repository dispatch
    const response = await axios.post(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/dispatches`,
      {
        event_type: 'pre-order-submission',
        client_payload: {
          firstName,
          lastName,
          email,
          phone,
          quantity,
          color,
          specialRequests,
          totalPrice
        }
      },
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Pre-order webhook triggered:', response.status);
    res.json({ success: true, message: 'Pre-order submitted successfully!' });
    
  } catch (error) {
    console.error('Error triggering pre-order webhook:', error);
    res.status(500).json({ success: false, message: 'Failed to submit pre-order' });
  }
});

// Contact form webhook
app.post('/webhook/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;
    
    // Trigger GitHub repository dispatch
    const response = await axios.post(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/dispatches`,
      {
        event_type: 'contact-submission',
        client_payload: {
          firstName,
          lastName,
          email,
          phone,
          subject,
          message
        }
      },
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Contact webhook triggered:', response.status);
    res.json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('Error triggering contact webhook:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook handler running on port ${PORT}`);
});
