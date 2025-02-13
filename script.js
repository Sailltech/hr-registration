document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("name", document.querySelector('input[name="name"]').value);
    formData.append("email", document.querySelector('input[name="email"]').value);
    formData.append("phone", document.querySelector('input[name="phone"]').value);
    formData.append("resume", document.getElementById("resume").files[0]);

    document.getElementById("statusMessage").innerText = "Processing...";

    fetch("http://yourbackend.com/api/register", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.payment_url;
        } else {
            document.getElementById("statusMessage").innerText = "Error: " + data.message;
        }
    })
    .catch(error => console.error("Error:", error));
});
