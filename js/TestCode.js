const fs = require('fs');
if (!fs.existsSync('DBP8.sqlite3'))
    console.log('OK');
else
    console.log('NOT');