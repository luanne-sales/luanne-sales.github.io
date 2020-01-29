let button = document.getElementById('form')

button.addEventListener('submit', (event) =>{
  event.preventDefault()
  let name = document.getElementById('form-subject').value
  let subject = document.getElementById('form-subject').value
  let body = document.getElementById('form-msg').value
  let msg = encodeURI(`mailto:luannesantos@yahoo.com.br?subject=${subject}-${name}&body=${body}`)
  window.open(msg)
})