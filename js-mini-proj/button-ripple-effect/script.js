const btn = document.querySelector('.btn')

btn.addEventListener('mouseover', (e) => {
  const y = (e.pageY - btn.offsetTop);
  const x = (e.pageX - btn.offsetLeft);

  btn.style.setProperty("--xPos", x + "px")
  btn.style.setProperty("--yPos", y + "px")
})