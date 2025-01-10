let tasks = [];
function updateTask() {
    document.getElementById("showTask").innerHTML = tasks
        .map(
            (task, index) =>
                `<li>${task}</li> <button class="btn btn-dark btn-sm" onclick="deleteTask(${index})">Delete</button><br>`
        )
        .join("");
}

function addTask() {
    taskInput = document.getElementById("taskName");
    taskElement = taskInput.value;
    tasks.push(taskElement);
    taskInput.value = "";
    updateTask();
    console.log(tasks);
}

function deleteTask(i) {
    tasks.splice(i, 1);
    updateTask();
}

function clearAll() {
    tasks = [];
    updateTask();
}

let marks = [];

function updateMarks() {
    document.getElementById("showMarks").innerHTML = marks
        .map((mark) => `<li>${mark}</li>`)
        .join("");
}

function addMarks() {
    marksInput = parseInt(document.getElementById("marks").value);
    // let GivenMarks = marksInput.value;
    marks.push(marksInput);
    document.getElementById("marks").value = ''
    updateMarks();

}

function calculations() {
    if (marks.length > 0) {
        const total = marks.reduce((sum, mark) => sum + mark);
        const average = total / marks.length;
        const minValue = Math.min(...marks);
        const maxValue = Math.max(...marks);
        document.getElementById("calculatedOutput").innerHTML = `Total marks = ${total}<br>
                                                            Average = ${average.toFixed(2)}<br>
                                                            Highest marks = ${maxValue}<br>
                                                            Lowest marks = ${minValue}`;
    }
}

function reset() {
    document.getElementById("showMarks").innerHTML = "";
    document.getElementById("calculatedOutput").innerHTML = "";
    marks = [];
}



let arr = ["mumbai", "pune", "delhi", "kolkatta", "jaipur"];
function search() {
    searchInput = document.getElementById("inputText").value;
    // const givenInput = searchInput.value;
    const cities = arr.find((city) => city);
    document.getElementById("searchedOutput").innerHTML = `${cities}`;
}






let numbers = [];
function addNumber() {
    number = parseInt(document.getElementById("inputNumbers").value);
    numbers.push(number);
    document.getElementById("inputNumbers").value = "";
    console.log(numbers);
}

function evenNumber() {
    const evens = numbers.filter((num) => num % 2 == 0);
    document.getElementById("numberOutput").innerHTML = `Even numbers are ${evens}`;
}

function oddNumber() {
    const odds = numbers.filter((num) => num % 2 != 0);
    document.getElementById("numberOutput").innerHTML = `Odd numbers are ${odds}`;
}

function Remove(){
    numbers = [];
    document.getElementById('numberOutput').innerHTML = '';
}


let names = [];
function addName(){
    inputNames = document.getElementById('inputName').value;
    names.push(inputNames);
    console.log(names);
    document.getElementById('inputName').value = ''
    showname();
}

function showname(){
    document.getElementById('inputNamesFromUser').innerHTML = names.join(' ');
}

function sort(){
    sortedArray = names.sort();
    document.getElementById('output').innerHTML = sortedArray.join(' ');
}

function resetAll(){
    names = [];
    sortedArray = [];
    document.getElementById('output').innerHTML = ''
    document.getElementById('inputNamesFromUser').innerHTML = ''
}
