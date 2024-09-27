const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { nanoid } = require('nanoid');
const Url = require('./models/Url');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/urlshortener', { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/api/url', async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = nanoid(10); 
  const shortUrl = "http://localhost:4000/"+shortCode;

  const newUrl = new Url({ longUrl, shortUrl, shortCode });
  await newUrl.save();

  res.json({ shortUrl,longUrl });
});

// GET endpoint to redirect
app.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;
  const url = await Url.findOne({ shortCode });
  if (url) {
    return res.redirect(url.longUrl);
  }
  res.status(404).json('URL not found');
});

app.listen(4000, () => console.log('Server running on port'));
