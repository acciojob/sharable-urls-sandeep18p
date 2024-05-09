document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const h3 = document.getElementById("url");
    h3.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
});