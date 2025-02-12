document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story");
    const choicesContainer = document.getElementById("choices");

    const story = {
        start: {
            text: "You find yourself in a mystical forest. Do you follow the sound of water or explore a cave?",
            choices: [
                { text: "Follow the sound of water", next: "waterfall" },
                { text: "Explore the cave", next: "cave" }
                ]
                },
                waterfall: {
                    text: "You arrive at a beautiful waterfall. A stranger offers you a magical potion. Do you accept it?",
                    choices: [
                        { text: "Yes", next: "potion" },
                        { text: "No", next: "forest" }
                    ]
                },
                cave: {
                    text: "Inside the cave, you see a treasure chest. Do you open it?",
                    choices: [
                        { text: "Yes", next: "treasure" },
                        { text: "No", next: "darkness" }
                    ]
                },
                potion: {
                    text: "You drink the potion and feel a surge of power. You have gained superhuman strength! The adventure continues...",
                    choices: [
                        { text: "Explore the forest with your new power", next: "powerful_explorer" },
                        { text: "Return to the waterfall", next: "waterfall" }
                    ]
                },
                forest: {
                    text: "You walk deeper into the forest and discover an ancient ruin. Inside, you find a golden key.",
                    choices: [
                        { text: "Take the key", next: "golden_key" },
                        { text: "Leave it and walk away", next: "lost_forest" }
                    ]
                },
                treasure: {
                    text: "The chest is full of gold! You have become rich and completed your adventure!",
                    choices: []
                },
                darkness: {
                    text: "The cave is too dark, and you lose your way. You are never seen again...",
                    choices: []
                },
                powerful_explorer: {
                    text: "With your new strength, you lift a fallen tree blocking a hidden path. You discover an ancient city!",
                    choices: []
                },
                golden_key: {
                    text: "You take the golden key and suddenly, a secret passage opens in the ruins!",
                    choices: []
                },
                lost_forest: {
                    text: "You wander aimlessly and eventually find your way back home. Adventure over!",
                    choices: []
                }
            };

            function renderStory(state) {
                storyContainer.textContent = story[state].text;
                choicesContainer.innerHTML = "";

                if (story[state].choices.length === 0) {
                    // If no choices remain, offer restart option
                    const button = document.createElement("button");
                    button.textContent = "Restart Adventure";
                    button.onclick = () => renderStory("start");
                    choicesContainer.appendChild(button);
                } else {
                    // Display choices
                    story[state].choices.forEach(choice => {
                        const button = document.createElement("button");
                        button.textContent = choice.text;
                        button.onclick = () => renderStory(choice.next);
                        choicesContainer.appendChild(button);
                    });
                }
            }

            renderStory("start");
});
