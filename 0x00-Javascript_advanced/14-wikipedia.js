function createElement(data) {
    let para = document.createElement('p');
    para.innerHTML = data;
    document.body.append(para);
}

function queryWikipedia(callback) {
    var xml = new XMLHttpRequest();
    xml.load = function () {
        callback(xml.response);
    }
    xml.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%2");
    xml.send();
}

let indirectcall = createElement();

queryWikipedia(indirectcall);
