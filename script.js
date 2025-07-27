
document.getElementById("call").addEventListener("click", () => {
    let inp = document.getElementById("earth");
    let objectName = inp.value.trim().toLowerCase(); // normalize input

    if (objectName) {
        fetchFactForObject(objectName);
    } else {
        document.getElementById("factDisplay").innerText = "Please enter a planet name.";
    }
});

async function fetchFactForObject(objectName) {
    try {
        const url = `https://api.bootprint.space/fact/${objectName}`;
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("factDisplay").innerText = `Fact about ${data.object}: ${data.fact}`;
    } catch (error) {
        console.error("Error fetching the fact:", error);
        document.getElementById("factDisplay").innerText = "Could not fetch fact. Check the object name.";
    }
}
