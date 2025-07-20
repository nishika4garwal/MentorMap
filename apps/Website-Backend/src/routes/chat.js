// Website-Backend/hono/routes/chat.js

import { Hono } from 'hono';

const chat = new Hono();

chat.post('/chat', async (c) => {
  const { message } = await c.req.json();

  if (!message) {
    return c.json({ error: 'Message is required' }, 400);
  }

  try {
    const result = await c.env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
      messages: [
        {
          role: 'system',
          content: 'You are a helpful mentor assistant that answers queries in a friendly and simple way.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    return c.json({ message: result.response });
  } catch (err) {
    console.error('Cloudflare AI Error:', err);
    return c.json({ error: 'Failed to generate reply from LLM' }, 500);
  }
});

export default chat;
