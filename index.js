const app = require("./server.js")
const port = process.env.PORT || 3000

app.listen(port, () => console.log("Server has started on port: " + port))