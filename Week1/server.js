var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    
    /* Gives you the complete url with parameters sent as well person?userid=2234 */
    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */

    fileName += fileName == 'todo' ? '.json' : '.html';

    /* lets try to read the html page found */
    fileSystem.readFile(fileName , callback);

    function callback(err, data) {
        if (err) {
            console.error(err);
            /* Send the HTTP header
            * HTTP Status: 301 : Moved Permanently
            * Location:'http://' +  'The host of the requested location' + the path to the page that you want to be redirected to.
            */
           response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index'});
        } else {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(data.toString());
        }
        
        response.end();
    }
}).listen(3000);


console.log('Server running at http://localhost:3000/');