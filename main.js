const buttons = document.querySelectorAll('button'),
  audios = document.querySelectorAll('audio')

buttons.forEach((button) => {
  button.addEventListener('click', playSound)
})

function playSound(e) {
  // match audio for button or key code
  const sound = Array.from(audios).find((a) => {
    if (
      a.dataset.id === e.target.dataset.id ||
      e.keyCode - 64 == a.dataset.id
    ) {
      return a
    }
  })

  // if found play it
  if (sound) {
    sound.currentTime = 0 // this is really  cool
    sound.play()
    const button = Array.from(buttons).find(
      (b) => b.dataset.id === sound.dataset.id
    )

    if (button) {
      button.className = 'active'
      setTimeout(() => {
        button.className = ''
      }, 100)
    }
  }
}

window.addEventListener('keydown', playSound)
