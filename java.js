function str() {
    location.href = "experience.html"

}

function logi() {
    location.href = "Login.html"

}

function back() {
    location.href = "index.html"
}

function back1() {
    location.href = "home.html"
}

function back3() {
    location.href = "home.html";
}

function stop() {
    location.href = "home.html"
}

function beg() {
    location.href = "home.html"
}

function strtworkout() {
    location.href = "workout.html"
}

function exercise() {
    location.href = "exercise.html"
}

function addbtn() {
    location.href = "exercise.html"
}

// timer
function startTimer() {
    var seconds = 0;
    var timerElement = document.getElementById("timer");

    // Update the timer display every second
    setInterval(function () {
        seconds++;
        var formattedTime = formatTime(seconds);
        timerElement.textContent = formattedTime;
    }, 1000);
}

//checkbox

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return +formattedMinutes + ":" + formattedSeconds;
}

function search_exe() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('elist');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}

function chkbtn() {
    var checkboxes = document.querySelectorAll('.chk');
    var text = document.getElementById("text");
    var checkedCount = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (checkedCount > 0) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function experienceLvl() {

    var selectedOption = document.querySelector('input[name="liftingLevel"]:checked');

    if (selectedOption) {
        localStorage.setItem('selectedOption', selectedOption.value);
    }

    location.href = "home.html"



}

const gymExercises = [
    {
        exercise: "Push-ups",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Chest"
    },
    
    {
        exercise: "Chest Press",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Chest"
    },
    
    {
        exercise: "Dumbbell Curl",
        level: "beginner",
        sets: 3,
        reps: 10,
        muscle: "Biceps"
    },
    
    
    {
        exercise: "Squats",
        level: "beginner",
        sets: 3,
        reps: 12,
        muscle: "Legs"
    },
    {
        exercise: "Plank",
        level: "beginner",
        sets: 3,
        reps: 30,
        muscle: "Core"
    },
    {
        exercise: "Jumping Jacks",
        level: "beginner",
        sets: 3,
        reps: 15,
        muscle: "Full Body"
    },
    {
        exercise: "Mountain Climbers",
        level: "intermediate",
        sets: 4,
        reps: 12,
        muscle: "Core"
    },
    {
        exercise: "Lunges",
        level: "intermediate",
        sets: 4,
        reps: 10,
        muscle: "Legs"
    },
    {
        exercise: "Burpees",
        level: "intermediate",
        sets: 4,
        reps: 8,
        muscle: "Full Body"
    },
    {
        exercise: "Bicycle Crunches",
        level: "intermediate",
        sets: 3,
        reps: 20,
        muscle: "Abs"
    },
    {
        exercise: "Pull-ups",
        level: "advanced",
        sets: 5,
        reps: 8,
        muscle: "Back"
    },
    {
        exercise: "Deadlifts",
        level: "advanced",
        sets: 5,
        reps: 5,
        muscle: "Legs"
    },
    {
        exercise: "Handstand Push-ups",
        level: "advanced",
        sets: 4,
        reps: 6,
        muscle: "Shoulders"
    },
    {
        exercise: "Pistol Squats",
        level: "advanced",
        sets: 3,
        reps: 8,
        muscle: "Legs"
    }
];

var exerciseContainer = document.getElementById("exerciseContainer");
var selectedOption = localStorage.getItem('selectedOption');
var selectedExercises = gymExercises.filter(exercise => exercise.level === selectedOption);

for (var i = 0; i < selectedExercises.length; i++) {
    var exercise = selectedExercises[i];




    var exboxDiv = document.createElement("div");
    exboxDiv.className = "exbox";

    var extxtDiv = document.createElement("div");
    extxtDiv.className = "extxt";
    
      var icon = document.createElement("div");
    icon.className = "trgticon";
    extxtDiv.appendChild(icon);
    
    
    

    var exerciseDiv = document.createElement("div");
    exerciseDiv.className = "trgttxt";

    var exerciseTitle = document.createElement("h4");
    exerciseTitle.textContent = exercise.exercise;
    exerciseDiv.appendChild(exerciseTitle);

    var exerciseSetsReps = document.createElement("p");
    exerciseSetsReps.textContent = exercise.sets + " sets  " + exercise.reps + " reps";
    exerciseDiv.appendChild(exerciseSetsReps);
    extxtDiv.appendChild(exerciseDiv);
    exboxDiv.appendChild(extxtDiv);

    var optButton = document.createElement("button");
    optButton.className = "optbtn";
    optButton.textContent = "...";
    exboxDiv.appendChild(optButton);

    
    
    exerciseContainer.appendChild(exboxDiv);



}


var totalExercises = selectedExercises.length;
var totalExercisesElement = document.querySelector(".ttl h2");
totalExercisesElement.textContent = totalExercises + " exercises";






    

