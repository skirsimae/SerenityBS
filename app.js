const express = require('express')
const app = express()

app.use(express.static('sublime', {
    index: 'index.html'
}));

/*app.get('/hello', function(request, response) {
	response.send('hi');
})
*/

const listener = app.listen(3000, function() {
    console.log('server has started at ', listener.address().port)
})
