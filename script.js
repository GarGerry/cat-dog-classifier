async function predict() {
    const fileInput = document.getElementById("image-upload");
    const imageFile = fileInput.files[0];

    if (!imageFile) {
        alert("Please upload an image!");
        return;
    }

    const formData = new FormData();
    formData.append('file', imageFile);

    try {
        const response = await fetch('https://gargerry-cat-dog-classifier.hf.space/run/predict', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        displayResult(result);
    } catch (error) {
        console.error("Error during prediction:", error);
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    const label = result.data[0]; // Assuming 'data' contains the predicted label
    resultDiv.innerHTML = `Prediction: ${label}`;
}
