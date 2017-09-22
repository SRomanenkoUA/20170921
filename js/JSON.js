var data = {items: [
    {id: "1", name: "Snatch", type: "crime"},
    {id: "7", name: "Douglas Adams", type: "comedy"},
    {id: "8", name: "Dick Francis", type: "mystery"},
    {id: "4", name: "Ordinary People", type: "drama"},
    {id: "5", name: "Billy Elliot", type: "drama"},
    {id: "6", name: "Toy Story", type: "children"}
]};

function AddToJSON() {
    data.items.splice(0,data.items.length); // обнуляю полностью


}