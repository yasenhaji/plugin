var details = {
method: 'GET',
url: 'http://google.com/',
async: true,
contentType: 'text'
};

kango.xhr.send(details, function(data) {
    if(data.status == 200 && data.response != null) {
    var text = data.response;
        console.log(text);
    }
    else { // something went wrong
        console.log('something went wrong');
    }
});