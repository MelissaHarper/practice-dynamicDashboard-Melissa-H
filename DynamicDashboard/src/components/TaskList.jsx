export let task = [
    { taskName: "Do Homework", status: false},
    { taskName: "Clean Room", status: true},
    { taskName: "Make Dinner", status: false},
    { taskName: "Wash Dishes", status: true}

];

export default function TaskList() {
    const List = task.map((task) => 
    <li 
    key={"tasks"} 
    style={task.status ? {color: 'green'} : {color: 'default'}}>{task.taskName} {task.status ? "\u2713" : "\u274c"}</li>);
    return (
        <ul>{List}</ul>
    );
}