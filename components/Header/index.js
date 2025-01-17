// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component

//Creating a reference point to the parent element
const createHeader = document.querySelector('.header-container')
//Appending the component to the parent element
createHeader.appendChild(Header())

function Header() {
    //Creating the Elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    // Adding the classes
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //Adding the HTML text
    date.textContent = `March 28, 2019`
    title.textContent = `Lambda Times`
    temp.textContent = `98°`

    //Setting the HTML Structure
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    return header

}