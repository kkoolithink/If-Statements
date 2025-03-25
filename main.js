let count = 0;

function check_driving_age() {
    const age = parseInt(document.querySelector("#age_input").value);
    const message = age >= 16 ? "You can drive!" : "You cannot drive yet!";

    document.querySelector("#driving_message").textContent = message;
}

function greet_user() {
    const time = parseInt(document.querySelector("#time_input").value);
    let message = "";

    if (time < 12) {
        message = "Good morning!";
    }
    else if (time === 12) {
        message = "It's noon.";
    }
    else if (time > 12 && time < 18) {
        message = "Good afternoon!";
    }
    else {
        message = "Good evening!";
    }

    document.querySelector("#greeting").textContent = message;
}

function check_weather() {
    const weather = document.querySelector("#weather_input");
    const message = weather.value.toLowerCase() === "rain" ? "Grab your umbrella!" : "Wear your sunglasses!";

    document.querySelector("#weather_message").textContent = message;
}

function check_grade() {
    const score = parseInt(document.querySelector("#grade_input").value);
    let grade = "";

    if (score >= 90) {
        grade = "A";
    }
    else if (score >= 80) {
        grade = "B";
    }
    else if (score >= 70) {
        grade = "C";
    }
    else if (score >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    document.querySelector("#grade_result").textContent = `You got a ${grade}!`;
}

function check_voting_age() {
    const age = parseInt(document.querySelector("#vote_age_input").value);
    const message = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";

    document.querySelector("#voting").textContent = message;
}

function check_password() {
    const password = document.querySelector("#password_input").value;
    let message = "";

    if (password.length >= 12) {
        message = "That's a strong password!";
    }
    else if (password.length >= 8) {
        message = "That's a decent password!";
    }
    else {
        message = "Password is too weak!";
    }

    document.querySelector("#password_strength").textContent = message;
}

function check_day() {
    const day = document.querySelector("#day_input").value.trim();
    let message = "";

    if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
        message = "It's the weekend";
    }
    else {
        message = "It's a weekday!";
    }

    document.querySelector("#day_message").textContent = message;
}

function check_temperature() {
    const temp = parseInt(document.querySelector("#temp_input").value);
    let message = "";

    if (temp < 0) {
        message = "It's freezing!";
    }
    else if (temp < 15) {
        message = "It's chilly!";
    }
    else if (temp < 25) {
        message = "Nice weather!";
    }
    else {
        message = "It's hot outside!";
    }

    document.querySelector("#temp_message").textContent = message;
}

function check_login() {
    const login_input = document.querySelector("#login_input").value.toLowerCase();
    const is_logged_in = login_input === "yes";
    const message = is_logged_in ? "Welcome back" : "Please log in";

    document.querySelector("#login_status").textContent = message;
}

function suggest_meal() {
    const hour = document.querySelector("#meal_input").value;
    let meal = "";

    if (hour < 11) {
        meal = "Have some breakfast";
    }
    else if (hour < 15) {
        meal = "Time for lunch";
    }
    else if (hour < 21) {
        meal = "Dinner sounds good";
    }
    else {
        meal = "Maybe just a snack";
    }

    document.querySelector("#meal_suggestion").textContent = meal;
}

function count_increase() {
    count++;
    document.querySelector("#count_label").textContent = count;
}

function count_decrease() {
    if (count > 0) {
        count--;
    }
    
    document.querySelector("#count_label").textContent = count;
}

function count_reset() {
    count = 0;
    document.querySelector("#count_label").textContent = count;
}