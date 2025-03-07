const galleryItems = [
    { image: "image1.jpg", description: "Description 1" },
    { image: "image2.jpg", description: "Description 2" }
];

// Loop through items and create HTML elements dynamically
galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="${item.image}">
        <textarea>${item.description}</textarea>
    `;
    document.body.appendChild(div);
});