export default function Footer(props) {

    return (
        <footer className="absolute bottom-0 w-full px-5 py-2 bg-green-500">
            <p>{props.cookieStandArr.length} Locations World Wide</p>
        </footer>
    )
}