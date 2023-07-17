import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function MainNavBar() {
    return (
        <Navbar className="bg-body-tertiary" sticky="top">
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" activeKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>Database</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav className="justify-content-end" activeKey="/">

                    <Nav.Item>
                        <Nav.Link>Advance Scrape</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>Other</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavBar;