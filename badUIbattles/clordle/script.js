let keyboard = document.getElementById("keyboard");
let keys = document.querySelectorAll("#keyboard div");
let keysArray = [];

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    key.style.left = `${i*10}%`;
    key.style.bottom = `${i*20}%`;
    keysArray.push(key);
}

keys[10].style.left = "89.75%";
keys[10].style.bottom = "120%";

keys[11].style.bottom = "140%";
keys[11].style.left = "79.5%";

// Code above is to translate the NodeList into an Array of Nodes.

let onKeyboard = false;

keyboard.onmouseenter = _event => {
    onKeyboard = true;
};

keyboard.onmouseleave = _event => {
    onKeyboard = false;
};

// Code above is to check if the cursor is on the keyboard.

const [keyboardX, keyboardY] = [528, 86];

const coordsRelativeToKeyboard = ([x, y]) => [x - keyboardX, y - keyboardY];