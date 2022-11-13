//for deletion of item
let removeButton = document.getElementsByClassName('btn-danger');
//console.log(removeButton)

for (var i = 0; i < removeButton.length; i++) {
    var button = removeButton[i]
    button.addEventListener('click', function(event) {
        //console.log("delete!")
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}