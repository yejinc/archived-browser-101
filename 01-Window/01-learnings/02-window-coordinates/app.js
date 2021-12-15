// console-logging client and page position
const selected = document.querySelector('.selected-box')

selected.addEventListener('click', (event) => {
  console.log(selected.getBoundingClientRect())
  console.log(`client: ${event.clientX}, ${event.clientY}`)
  console.log(`page: ${event.pageX}, ${event.pageY}`)
})

// buttons that can scroll down to certain position

const byPos = document.querySelector('.by-position')
const toPos = document.querySelector('.to-position')
const toSelected = document.querySelector('.to-selected')
const toUp = document.querySelector('.to-up')

byPos.addEventListener('click', () => {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth',
  })
})

toPos.addEventListener('click', () => {
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth',
  })

  toSelected.addEventListener('click', () => {
    selected.scrollIntoView({
      behavior: 'smooth',
    })
  })
})

toUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})
