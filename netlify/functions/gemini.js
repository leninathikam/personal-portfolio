exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    const systemPrompt = `You are Lenin Goud Athikam's portfolio assistant. You are helpful, friendly, and knowledgeable about Lenin's background, skills, and projects. 

About Lenin:
- Data Science graduate student at Michigan Technological University (2024-2026)
- Bachelor's in Artificial Intelligence from Parul University, India (2020-2024, GPA: 8.34/10)
- Experienced in Python, SQL, Machine Learning, Deep Learning, NLP, and Data Analytics
- Interned at Edulyt India (Dec 2023 - Mar 2024) and YBI Foundation (Nov 2022 - Dec 2022)
- Projects: YouTube Sentiment Analysis, Spotify Recommender System, Swiggy Delivery Prediction, ETL Pipelines
- Certified by IBM Data Science Professional, Google Data Analytics Professional, and DataCamp Data Scientist Associate
- Contact: lathikam@mtu.edu | +1 (906) 275-8632
- Social: LinkedIn (athikam-lenin) | GitHub (leninathikam)

Keep responses concise, friendly, and relevant to the portfolio.`;

    const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\nUser question: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data.error?.message || 'API request failed' })
      };
    }

    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content) {
      const botResponse = data.candidates[0].content.parts[0].text;
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: botResponse.trim() })
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: "I couldn't generate a response. Please try again." })
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
