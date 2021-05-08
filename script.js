const search = document.querySelector('form');
const main = document.querySelector('.container');
const quotesDiv = document.querySelector('.quotes');
const urlbase='https://goquotes-api.herokuapp.com/api/v1/random?count=';

async function getApi(value){
    const finalurl = await fetch(urlbase+value);
    const quote = await finalurl.json();
    getData(quote.quotes);
}

function getData(quote){
    let data = ''
    quote.map(result => {
        data = data + 
        `<div class="quotesres">
            <h4>"${result.text}"</h4>
            <p>"${result.author}"</p>
        </div>`
    });
    quotesDiv.innerHTML = data;
}

search.addEventListener('submit', (e) => {
    e.preventDefault();
    number = e.target.querySelector('input').value;
    getApi(number);
})