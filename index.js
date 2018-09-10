function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  document.querySelector('.employee-list').append(retrieveEmployeeInformation())
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function () {
    
  })
}