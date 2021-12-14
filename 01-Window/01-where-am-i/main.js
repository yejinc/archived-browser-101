'use strict'

const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')
const eye = document.querySelector('.eye')
const XY = document.querySelector('.location')

document.addEventListener('mousemove', (event) => {
  const x = event.clientX
  const y = event.clientY

  vertical.style.left = `${x}px`
  horizontal.style.top = `${y}px`
  eye.style.left = `${x}px`
  eye.style.top = `${y}px`
  XY.style.left = `${x}px`
  XY.style.top = `${y}px`
  XY.innerHTML = `(${x}, ${y})`
})
