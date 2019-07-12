// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const attach = document.querySelector('.cards-container')


const test1 = [
    [{
        headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
        authorPhoto: "./assets/sir.jpg",
        authorName: "SIR RUFF'N'STUFF"
    }],
    [{
        headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
        authorPhoto: "./assets/sir.jpg",
        authorName: "SIR RUFF'N'STUFF"
    }],
    [{
        headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
        authorPhoto: "./assets/sir.jpg",
        authorName: "SIR RUFF'N'STUFF"
    }]
]

test1.forEach(e => {
    e.forEach(e => {
        console.log(attach.appendChild(Cards(e)))
    })
})

// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
//     .then(data => {
//         console.log(data)

//         const articles = data.data
//         console.log(articles)

//         articles.forEach(e => {
//             e.forEach(e => {
//                 console.log(attach.appendChild(Cards(e)))
//             })
//         })

//     })
//     .catch(error => {
//         console.log(`Connection not found at https://lambda-times-backend.herokuapp.com/articles`, error)
//     })

function Cards(object) {
    // <div class="card">
    //   <div class="headline">{Headline of article}</div>
    //   <div class="author">
    //     <div class="img-container">
    //       <img src={url of authors image} />
    //     </div>
    //     <span>By {authors name}</span>
    //   </div>
    // </div>

    //Creating the Elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgBox = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')

    // Adding the classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgBox.classList.add('img-container')

    //Adding the HTML text
    headline.textContent = object.headline
    name.textContent = object.authorName
    img.src = object.authorPhoto

    //Putting the HTML in the correct order
    card.appendChild(headline)
    card.appendChild(author)

    author.appendChild(imgBox)
    author.appendChild(name)

    imgBox.appendChild(img)

    return card
}