// GOAL
// Improve performance

// PROCESS
// 1. change position to translate
// 2. move eye to exact center of the viewport
// 3. since eye's (0, 0) is located to the middle of the viewport, move eye to the center center
// 3-1. call eye.getBoundingClientRect()
// 3-2. declare half of eyeRect width and height as constant
// 3-3. apply to eye translate(X - width,Y - height)
// 4. wrap mousemove EventListener and relevant constants with window.addEventListener('load') ∵ script element assigned as defer & can cause a bug(eye image not loaded yet when refresh)

'use strict'

const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const eye = document.querySelector('.eye')
const XY = document.querySelector('.location')

window.addEventListener('load', () => {
  const eyeRect = eye.getBoundingClientRect()
  const eyeRectHalfWidth = eyeRect.width / 2
  const eyeRectHalfHeight = eyeRect.height / 2

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX
    const y = event.clientY

    vertical.style.transform = `translateX(${x}px)`
    horizontal.style.transform = `translateY(${y}px)`
    eye.style.transform = `translate(${x - eyeRectHalfWidth}px, ${
      y - eyeRectHalfHeight
    }px)`
    XY.style.transform = `translate(${x}px, ${y}px)`
    XY.innerHTML = `(${x}, ${y})`
  })
})
