const body = document.querySelector("body")

body.addEventListener('mousemove', (e) => {
  // getting the position of mouse
  const xPos = e.offsetX
  const yPos = e.offsetY

  // creating an span element
  const span = document.createElement("span")
  // styling the new created span
  span.style.left = xPos + "px"
  span.style.top = yPos + "px"
  // appending the new created span to the body
  body.appendChild(span)

  // creating a random number
  const size = Math.random() * 100
  // styling the span width and height
  span.style.width = size + 'px'
  span.style.height = size + 'px'
  
  // setting a timer when span will be remove/disapper
  setTimeout(() => {
    span.remove()
  }, 3000);
})