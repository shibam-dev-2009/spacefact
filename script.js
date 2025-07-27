document.getElementById("call").addEventListener("click", () => {
    let inp = document.getElementById("earth");
    let objectName = inp.value.trim().toLowerCase();

    if (objectName) {
        fetchFactForObject(objectName);
    } else {
        document.getElementById("factDisplay").innerText = "Please enter a celestial object name.";
    }
});

async function fetchFactForObject(objectName) {
    try {
        const url = `https://api.bootprint.space/fact/${objectName}`;
        const response = await fetch(url);

        // If not OK (like 404), show error
        if (!response.ok) {
            throw new Error(`No fact found for "${objectName}".`);
        }

        const data = await response.json();

        // Extra safety check
        if (data.fact && data.object) {
            document.getElementById("factDisplay").innerText =
                `Fact about ${data.object}: ${data.fact}`;
        } else {
            throw new Error("Invalid response format.");
        }
    } catch (error) {
        console.error("Error fetching the fact:", error);
        document.getElementById("factDisplay").innerText = error.message;
    }
}
