import { task } from "./TaskList";

export default function TaskCount() {
    let complete = 0;
    let incomplete = 0;
    task.map((task) => {
        task.status ? complete += 1 : incomplete += 1
    }); 
    return (
        <p>Completed tasks: {complete}   Incomplete tasks: {incomplete}</p>
    )
}