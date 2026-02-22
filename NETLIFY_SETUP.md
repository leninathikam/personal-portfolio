# Portfolio Setup Instructions for Netlify

## Gemini AI Chatbot Setup

To enable the chatbot with Gemini AI, follow these steps:

### 1. Get Your Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Create API Key"
3. Copy your API key

### 2. Add API Key to Netlify

**Option A: Via Netlify Dashboard (Recommended)**
1. Go to your Netlify project: https://app.netlify.com
2. Click **Site settings** → **Build & deploy** → **Environment**
3. Click **Edit variables**
4. Add a new environment variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: (paste your API key)
5. Click **Save**
6. Trigger a new deploy (push to GitHub or click Deploy)

**Option B: Via Netlify CLI**
```bash
netlify env:set GEMINI_API_KEY "your-api-key-here"
netlify deploy --prod
```

### 3. How It Works

- The chatbot calls a **Netlify serverless function** (`netlify/functions/gemini.js`)
- The function securely uses the API key stored as an environment variable
- Your API key is **never exposed** in the frontend code

### 4. Local Testing

To test locally with the serverless function:
```bash
npm install -g netlify-cli
netlify dev
```

Or manually add the API key to a `.env` file (not committed to Git):
```
GEMINI_API_KEY=your-api-key-here
```

## File Structure

```
personal-portfolio/
├── index.html (main portfolio)
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
├── netlify/
│   └── functions/
│       └── gemini.js (Netlify serverless function)
├── netlify.toml (Netlify configuration)
└── .gitignore
```

## Security Notes

✅ API key is stored securely as a Netlify environment variable
✅ API key is never exposed in frontend code
✅ The serverless function handles all API calls
✅ CORS is handled by Netlify
