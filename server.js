// Для Vercel serverless functions создайте api/chat.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages, apiKey, stream = true, ...options } = req.body;
        
        if (!apiKey) {
            return res.status(400).json({ error: 'API key is required' });
        }

        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages,
                stream,
                ...options
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        if (stream) {
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            for await (const chunk of response.body) {
                res.write(chunk);
            }
            res.end();
        } else {
            const data = await response.json();
            res.json(data);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
};