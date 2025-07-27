async function fetchPlanetImage(planet) {
    try {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`);
        const data = await response.json();
        const imgUrl = data.collection.items[0]?.links[0]?.href;

        if (imgUrl) {
            document.getElementById("planetImage").src = imgUrl;
            document.getElementById("planetImage").style.display = "block";
        } else {
            document.getElementById("planetImage").style.display = "none";
            alert("No image found.");
        }
    } catch (err) {
        console.error(err);
    }
}
