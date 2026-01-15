const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'Public' folder
app.use(express.static(path.join(__dirname, 'Public')));

// Start the server
app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`✅ SERVER RUNNING!`);
    console.log(`👉 Open your browser at: http://localhost:${PORT}`);
    console.log(`==================================================\n`);
});