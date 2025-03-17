function displayRamens() {
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "/home/christine/Pictures/aapi-ramen-dishes-inline-4-cz-2x1-240423-c9a405.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "/home/christine/Pictures/miso-chicken-ramen-XL-RECIPE1217-96952c0ec830414d961a39ce21af924e.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "/home/christine/Pictures/tonkotsu.jpg" }
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
