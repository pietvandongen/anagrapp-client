function init() {
    document
        .getElementById('submit')
        .addEventListener('click', fetchResults);
}

function fetchResults(event) {
    event.preventDefault();

    var word = document.getElementById('word').value;
    var resultContainer = document.getElementById('anagrams');

    resultContainer.innerHTML = '';

    fetch('http://localhost:8080/anagram/' + word)
        .then(function (response) {
            return response.json();
        })
        .then(function (list) {
            for (var i = 0; i < list.length; i++) {
                var item = document.createElement('li');
                item.className = 'list-group-item';
                item.innerHTML = list[i];

                resultContainer.appendChild(item);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

(function () {
    init();
})();
