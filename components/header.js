export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 bg-green-500 font-medium">
            <h1 className="text-4xl">{props.title}</h1>
        </header>
    );
}