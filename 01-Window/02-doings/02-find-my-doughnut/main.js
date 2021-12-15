'use strict'

const findBtn = document.querySelector('.find-btn')
const doughnut = document.querySelector('.doughnut')

findBtn.addEventListener('click', () => {
  doughnut.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
})
