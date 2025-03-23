function taskInput () {
    let input = document.getElementById("taskInput").value;

    // check if the input is empty

    if (input.trim() === "") {
        alert("Please enter a task");
    }
    else {
        let task = document.createElement("li");
        task.innerHTML = input;
        document.getElementById("taskList").appendChild
    }
}