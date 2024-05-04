import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserMenu } from './usersMenu';
import { BasicMenu } from './basicMenu';
import { MenegerMenu } from './menegerMenu';

export const Menu = () => {

    const currentUser = useSelector(s => s.users.currentUser);
    return (<>
        {!currentUser && <BasicMenu />}
        {currentUser && currentUser.role == "User" && <UserMenu />}
        {currentUser && currentUser.role == "Admin" && <MenegerMenu />}
        <Outlet />
    </>
    )
}
