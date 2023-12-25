const http= require('http');
const server= http.createServer((req,res) => {
res.writeHead(200,{'content-type': 'text/plain'});
res.end('welcom in nod.js');
});
server.listen(3000, () =>{
    console.log('working is done on port 3000 server');
});