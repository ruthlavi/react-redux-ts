import { Link } from "react-router-dom"
import { FormDialog } from './loginDialog';


export const BasicMenu = () => {
    return (
        <>
            <FormDialog />
            <div>
                <Link to="/">HOME|</Link>
                <Link to="/contact">CONTACT|</Link>
                <Link to="/about">ABOUT|</Link>
                <Link to="/donations">Donations|</Link>
            </div>
        </>
    )
}
