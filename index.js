

app = require('./app')

const port = 5550;
app.listen(port, () => {
    console.log('Connected on http://localhost:' + port);
});
