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
  let a = .createElement('li')
  document.querySelector('.employee-list')
  (retrieveEmployeeInformation())
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function (e) {
      addNewElementAsLi() 
  })
}
