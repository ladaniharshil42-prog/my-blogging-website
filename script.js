
function searchGame() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let games = document
        .getElementsByClassName("game-card");

    for (let i = 0; i < games.length; i++) {

        let name = games[i]
            .getElementsByTagName("h2")[0]
            .innerText
            .toLowerCase();

        if (name.includes(input)) {

            games[i].style.display = "block";

        } else {

            games[i].style.display = "none";

        }
    }
}



function showGame(game) {

    if (game === "Minecraft") {

        alert(
            "Minecraft\n\n" +
            "A sandbox game where players can build, " +
            "explore and survive."
        );

    }

    else if (game === "Valorant") {

        alert(
            "Valorant\n\n" +
            "A tactical FPS game focused on teamwork " +
            "and strategy."
        );

    }

    else if (game === "FIFA") {

        alert(
            "FIFA\n\n" +
            "A football game where players can create " +
            "teams and compete in matches."
        );

    }

    else if (game === "PUBG") {

        alert(
            "PUBG\n\n" +
            "A battle royale game where players fight " +
            "to become the last player standing."
        );

    }
}



function readBlog(game) {

    if (game === "Minecraft") {

        alert(
            "Minecraft Gaming Blog\n\n" +
            "Explore the world, collect resources, " +
            "build shelters and survive."
        );

    }

    else if (game === "Valorant") {

        alert(
            "Valorant Gaming Blog\n\n" +
            "Learn basic strategies, teamwork and " +
            "aiming techniques."
        );

    }

    else if (game === "FIFA") {

        alert(
            "FIFA Gaming Blog\n\n" +
            "Improve your passing, attacking and " +
            "defending skills."
        );

    }

    else if (game === "PUBG") {

        alert(
            "PUBG Gaming Blog\n\n" +
            "Choose your landing location carefully " +
            "and survive until the end."
        );

    }
}



let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "!\nYour message has been submitted."
        );

        form.reset();

    });

}