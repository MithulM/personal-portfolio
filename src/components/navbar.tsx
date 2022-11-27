import { Link } from "react-router-dom"

function NavBar({ pages, style }) {
    function pageTab(page) {
        return <Link key={page} to={"/" + page}>{page}</Link>
    }
    return <nav>{pages.map(pageTab)}</nav>
}

export default NavBar;