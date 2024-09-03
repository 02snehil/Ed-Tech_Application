const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/generate-questions', async (req, res) => {
  const { content } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o', // Replace with the correct model
      prompt: `Generate questions based on the following content: ${content}`,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `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`, 
        'Content-Type': 'application/json'
      }
    });

    const questions = response.data.choices[0].text.trim();
    res.json({ questions });
  } catch (error) {
    console.error('Error generating questions:', error);
    res.status(500).send('Error generating questions');
  }
});

module.exports = router;
