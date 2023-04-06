const fs = require('fs');
const dir = fs.readdirSync('./src/guide');
console.log(dir.map(e => [`/guide/${e}`, e]))