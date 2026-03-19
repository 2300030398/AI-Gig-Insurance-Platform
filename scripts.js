function register() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;

    if (name === "" || city === "") {
        alert("Please enter Name and City");
    } else {
        alert("User Registered: " + name + " (" + city + ")");
    }
}

function buyPolicy() {
    alert("Policy Activated (₹49/week)");
}

function triggerRain() {
    document.getElementById("status").innerText =
        "Heavy rain detected 🌧️ → Claim triggered → ₹500 payout!";
}
