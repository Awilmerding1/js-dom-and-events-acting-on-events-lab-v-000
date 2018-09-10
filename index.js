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
  let a = document.querySelector('.employee-list')
  let b = a.createElement('li')
  a.innerHTML = retrieveEmployeeInformation()
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function (e) {
      addNewElementAsLi() 
  })
}
