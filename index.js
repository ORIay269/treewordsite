
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button[type="submit"]').addEventListener('click', function (event) {      
        event.preventDefault(); // Prevent the default form submission

        const inputText = document.getElementById('inputText').value.trim();
        console.log(inputText);
        const wordsArray =  inputText.split(/\n/);
        const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked');

        console.log(wordsArray);
        const output = wordsArray.map(word => {
            let modifiedWords = []
            modifiedWords.push(word);
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    modifiedWords.push(checkbox.name + word);
                    console.log(modifiedWords);  
                }
            });
            console.log(modifiedWords.join(",\n"))
            return modifiedWords.join(",\n");
        })
        document.getElementById('outputText').value = output;
    });
});

document.getElementById('copyButton').addEventListener('click', function() {
    var text = document.getElementById('outputText');
    text.focus();
    text.setSelectionRange(0, text.value.length);
    document.execCommand('copy');
    text.blur()
});

  document.addEventListener('DOMContentLoaded', function () {

    const selectAllBtn = document.querySelector('.select-all-btn');
    
    selectAllBtn.addEventListener('click', function () {

        const checkboxes = document.querySelectorAll('.checkbox-input');

        const anyUnchecked = Array.from(checkboxes).some(checkbox => !checkbox.checked);

        checkboxes.forEach(checkbox => {
            checkbox.checked = anyUnchecked;
        });
    });
  })
