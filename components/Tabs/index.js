// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const test = [
//     'javascript',
//     'bootstrap',
//     'technology',
//     'jquery',
//     'node.js',
// ];

const topic = document.querySelector('.topics')




// test.forEach(e => {
//     topic.appendChild(Tabs(e))
// })
// Function works and everything looks right to my eyes
// But I'm not able to step through the array like object.

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(data => {
        // console.log(`It's working`)
        const tabData = data.data.topics
        // tabData.toString
        // console.log(tabData)
        tabData.forEach(e => {
            topic.appendChild(Tabs(e))
        })

    })
    .catch(error => {
        console.log(`The lambda-times data is down, try again later`, error)
    })

function Tabs(object) {
    //    <div class="tab">topic here</div>
    //Creating the Elements
    const name = document.createElement('div')

    // Adding the classes
    name.classList.add('tab')

    //Adding the HTML text
    name.textContent = object
    // console.log(name)
    return name
}