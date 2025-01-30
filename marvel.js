function searchMovie() {
    let input = document.getElementById("search").value.toLowerCase();
    let movies = document.getElementsByClassName("marvel");

    for (let i = 0; i < movies.length; i++) {
        let title = movies[i].getAttribute("data-title").toLowerCase();

        if (title.includes(input)) {
            movies[i].style.display = "block";
        } else {
            movies[i].style.display = "none";
        }
    }
}
