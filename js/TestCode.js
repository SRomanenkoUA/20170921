//https://nodejs.org/api/fs.htm
// Рабоа с файловой системой

const fs = require('fs');
if (!fs.existsSync('DBP8.sqlite3')) // Проверяю есть ли такой файл в наличии в этой же папке
    console.log('OK');
else
    console.log('NOT');