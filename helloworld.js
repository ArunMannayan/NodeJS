const port = 3000
require('http')
  .createServer((req, res) => {
    console.log('url:', req.url)
    res.end('<h1><center>My Website V-1.0 </center></h1>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
