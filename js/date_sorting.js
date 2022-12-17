// Get the articles cards
let cards = document.getElementsByClassName("article-card")

// Convert the HTMLCollection into an array (to use the sort function)
cards = Array.prototype.slice.call(cards)

// Sort the cards by their update date
cards.sort(function(a, b) {
    return new Date(b.children[1].children[1].children[1].getAttribute("datetime"))
    - new Date(a.children[1].children[1].children[1].getAttribute("datetime"))
})

// Print the cards array in the console
// console.log(cards)

// Change the cards' display order
for(var i = 0, len = cards.length; i < len; i++) {
    cards[i].style.order = i
}
