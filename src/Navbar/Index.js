import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/item1" activestyle>
                        page 1
                    </NavLink>
                    <NavLink to="/item2" activestyle>
                        page 2
                    </NavLink>
                    <NavLink to="/item3" activestyle>
                        page 3
                    </NavLink>
                </NavMenu> 
            </Nav>
        </div>
    )
}

export default Navbar
