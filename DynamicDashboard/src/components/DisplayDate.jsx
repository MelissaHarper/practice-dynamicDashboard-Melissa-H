let Today = new Date().toLocaleDateString();

export default function DisplayDate() {
    return (
        <p>{Today}</p>
    );
}