// NOTE
// 1. position 값들을 translate로 바꾸기
// 2. rect 호출해서 eye를 대각선 위로 올려서 정렬하기

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
