const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample talk data
const talks = [
  {
    "time": "09:00 AM",
    "title": "The Future of Web Development",
    "speaker": "Jane Doe",
    "description": "A look into the next generation of web technologies."
  },
  {
    "time": "10:00 AM",
    "title": "Scaling Node.js Applications",
    "speaker": "John Smith",
    "description": "Best practices for building scalable and resilient Node.js backends."
  },
  {
    "time": "11:00 AM",
    "title": "Mastering CSS Grid",
    "speaker": "Alice Johnson",
    "description": "Deep dive into the powerful CSS Grid layout system."
  },
  {
    "time": "01:00 PM",
    "title": "Introduction to Machine Learning with TensorFlow.js",
    "speaker": "Bob Brown",
    "description": "Bring the power of machine learning to the browser."
  },
  {
    "time": "02:00 PM",
    "title": "The Art of Debugging",
    "speaker": "Charlie Davis",
    "description": "Strategies and tools for efficient debugging in modern applications."
  },
  {
    "time": "03:00 PM",
    "title": "Building Secure Web Applications",
    "speaker": "Diana Miller",
    "description": "An overview of common security vulnerabilities and how to prevent them."
  }
];

// API endpoint to get talk data
app.get('/api/talks', (req, res) => {
  res.json(talks);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
