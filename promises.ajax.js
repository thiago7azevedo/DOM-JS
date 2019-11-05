var minhaPromose = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest(); // requisição de um novo objet para dar inicio ao ajax
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }   
        }
    
    });

}

minhaPromose() 
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })