import TodaysDate from "./Date";
import Greeting from "./Greeting";
import PremiumMessage from "./premium";
import ToDoList from "./TaskList";


export default function DynamicDashboard() {
    return(
        <div>
            <TodaysDate />
            <Greeting />
            <PremiumMessage />
            <ToDoList/>
        </div>);

}