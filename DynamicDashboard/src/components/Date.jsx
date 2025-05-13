let Today = new Date().toLocaleDateString();

export default function TodaysDate() {
    return (
        <p>{Today}</p>
    );
}