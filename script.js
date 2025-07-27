document.getElementById("call").addEventListener("click", () => {
    const objectName = document.getElementById("earth").value.trim().toLowerCase();
    if (objectName) {
        showPlanetImage(objectName);
    } else {
        document.getElementById("planetImage").style.display = "none";
        alert("Please enter a celestial object name.");
    }
});

async function showPlanetImage(objectName) {
    const loader = document.getElementById("loader");
    const imgElement = document.getElementById("planetImage");

    // Show spinner, hide image
    loader.style.display = "block";
    imgElement.style.display = "none";

    try {
        const response = await fetch(`https://api.bootprint.space/img/${objectName}`);
        const data = await response.json();

        if (data.image) {
            imgElement.src = data.image;

            // Wait for image to fully load
            imgElement.onload = () => {
                loader.style.display = "none";
                imgElement.style.display = "block";
            };

            // In case image fails to load
            imgElement.onerror = () => {
                loader.style.display = "none";
                alert("Image failed to load.");
            };
        } else {
            throw new Error("No image found.");
        }
    } catch (error) {
        console.error("Error:", error);
        loader.style.display = "none";
        alert("Failed to load image. Please check the object name.");
    }
}
