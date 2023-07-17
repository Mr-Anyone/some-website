import { Container, ListGroup, ListGroupItem, Button, Col, Form, Row, FormGroup } from "react-bootstrap";


function StatusBar() {
    return (
        <>
            <ListGroup style={{ "textAlign": "center" }}>
                <ListGroupItem> 01/01/2023 - 01/01/2023 <Button>Stop</Button> </ListGroupItem>
                <ListGroupItem> 01/01/2023 - 01/01/2023 <Button>Stop</Button> </ListGroupItem>
                <ListGroupItem> 01/01/2023 - 01/01/2023 <Button>Stop</Button> </ListGroupItem>
                <ListGroupItem variant="danger">01/01/2023 - 01/01/2023 <Button disabled={true}>Stop</Button></ListGroupItem>
                <ListGroupItem variant="danger">01/01/2023 - 01/01/2023 <Button disabled={true}>Stop</Button></ListGroupItem>
                <ListGroupItem variant="success">01/01/2023 - 01/01/2023<Button disabled={true}>Stop</Button></ListGroupItem>
                <ListGroupItem variant="success">01/01/2023 - 01/01/2023<Button disabled={true}>Stop</Button></ListGroupItem>
                <ListGroupItem variant="success">01/01/2023 - 01/01/2023<Button disabled={true}>Stop</Button></ListGroupItem>
                <ListGroupItem variant="success">01/01/2023 - 01/01/2023<Button disabled={true}>Stop</Button></ListGroupItem>
            </ListGroup>
        </>)
}

function StartScrapeFrom() {
    return (
        <Form>
            <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <div className="d-grid pt-3">
                <Button className="primary" type="submit">Start Scrape</Button>
            </div>
        </Form>
    )
}


function StartComplexScrape() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="01/01/2023" />
            </Form.Group>

            <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="01/01/2023" />
            </Form.Group>

            <Form.Group classname="mb-2">
                <Form.Label>Delta</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <div className="d-grid pt-3">
                <Button className="" type="submit">Start</Button>
            </div>
        </Form >
    )
}


function SideBar() {
    return (
        <Container>
            <h2 className="display-6">Complex Scrape</h2>
            <StartComplexScrape />

            <h2 className="display-6">Simple Scrape</h2>
            <StartScrapeFrom />

            <h2 className="display-6">Recent Status</h2>
            <StatusBar />
        </Container>
    );
}

export default SideBar;