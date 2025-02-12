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
        }
    };

    function renderStory(state) {
        storyContainer.textContent = story[state].text;
        choicesContainer.innerHTML = "";

        story[state].choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => renderStory(choice.next);
            choicesContainer.appendChild(button);
        });
    }

    renderStory("start");
});
