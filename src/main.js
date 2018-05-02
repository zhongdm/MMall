function component() {

  var element = document.createElement('div')
  var btn = document.createElement('button')
  element.innerHTML = "ccc"
  btn.innerHTML = 'click me'
  element.appendChild(btn)
  return element
}
    var element = component()
    document.body.appendChild(element)