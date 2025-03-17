function displayRamens() {
    const ramens = [
        { 
            name: "Tonkotsu", 
            image: "https://example.com/tonkotsu.jpg", 
            restaurant: "Ichiran", 
            rating: 5, 
            comment: "Rich and creamy broth!" 
        },
        { 
            name: "Shoyu", 
            image: "https://example.com/shoyu.jpg", 
            restaurant: "Ramen House", 
            rating: 4, 
            comment: "Perfect balance of flavors." 
        }
    ];

    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    ramens.forEach(ramen => addRamenToMenu(ramen));
}

function addRamenToMenu(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");

    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.width = "100px";
    img.style.cursor = "pointer";

    img.addEventListener("click", () => handleClick(ramen));

    ramenMenu.appendChild(img);
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById("ramen-detail");

    ramenDetail.innerHTML = `
        <h2>${ramen.name}</h2>
        <h3>Restaurant: ${ramen.restaurant}</h3>
        <img src="${ramen.image}" alt="${ramen.name}" style="width: 200px;">
        <p><strong>Rating:</strong> ${ramen.rating} ⭐</p>
        <p><strong>Comment:</strong> ${ramen.comment}</p>
    `;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamen = {
            name: form.name.value,
            image: form.image.value,
            restaurant: form.restaurant.value,
            rating: form.rating.value,
            comment: form.comment.value
        }

        addRamenToMenu(newRamen);

        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
