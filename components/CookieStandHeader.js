import Overview from '../pages/overview'

export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 font-medium bg-green-500">
            <h1 className="text-4xl">{props.title}</h1>
            <Overview/>
        </header>
    );
}