const dashboard = document.querySelector('.dashboard')
const dashboardLeft = document.querySelector('.dashboard-left')
const dashboardRight = document.querySelector('.dashboard-right')
const dashboardMiddle = document.querySelector('.dashboard-middle')

function updateLeft() {
  dashboardLeft.innerHTML = `
    Monitor size  <br/>
    Whole browser size  <br />
    Webpage + scrollbar  <br />
    Webpage only 
    `
}

function updateMiddle() {
  dashboardMiddle.innerHTML = `
    ⟶ <br />
    ⟶ <br />
    ⟶ <br />
    ⟶
    `
}

function updateRight() {
  dashboardRight.innerHTML = `
    ${window.screen.width}, ${window.screen.height} <br/>
    ${window.outerWidth}, ${window.outerHeight} <br />
    ${window.innerWidth}, ${window.innerHeight} <br />
    ${document.documentElement.clientWidth} ${document.documentElement.clientHeight}
    `
}

function update() {
  updateLeft()
  updateMiddle()
  updateRight()
}

window.addEventListener('resize', update)
update()
