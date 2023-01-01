const Nav = ({childClass}) => {
    return ( 
        <nav className={childClass}>
            <h1>FOOD NINJA</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default Nav;