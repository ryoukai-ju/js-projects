const container = document.querySelector(".container")

const careers =  ['Youtuber', 'Webdev', 'Freelancer', 'Instructor']

let careerIndex = 0
let charaIndex = 0

updateText()

function updateText () {
  charaIndex++
  container.innerHTML = 
  `
    <h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,charaIndex)}</h1>
  `
  if(charaIndex === careers[careerIndex].length){
    careerIndex++
    charaIndex = 0
  }

  if (careerIndex === careers.length) {
    careerIndex = 0
  }
  setTimeout(updateText, 400);
}

