var xhr = new XMLHttpRequest(); // requisição de um novo objet para dar inicio ao ajax

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function() {
 if (xhr.readyState === 4) {
     console.log(JSON.parse(xhr.responseText));
 }   
}