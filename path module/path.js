var path=require("path")
// -----------basename----------
const a="./home/work"
console.log(path.basename(a));
// -----------dirname---------
const b="home/work"
console.log(path.dirname(b));
// -----------extname-----------
const c="home/new.pdf"
console.log(path.extname(c));
// ----------join--------------
console.log(path.join("/home","js","index.js"));
// ----------parse------------
console.log(path.parse("/home/js/index.js"));
