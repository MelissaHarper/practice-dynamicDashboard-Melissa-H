import DisplayDate from "./DisplayDate";
import Greeting from "./Greeting";
import Premium from "./premium";
import TaskCount from "./TaskCount";
import TaskList from "./TaskList";


export default function DynamicDashboard() {
    return(
        <div>
            <DisplayDate />
            <Greeting />
            <Premium />
            <TaskList/>
            <TaskCount/>
        </div>);

}