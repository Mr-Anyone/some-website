import Container from "react-bootstrap/Container"
import React from 'react';
import { Line } from "react-chartjs-2";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

function MainGraph() {
    const data = {
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
            {
                id: 1,
                label: '',
                data: [5, 6, 7],
            },
            {
                id: 2,
                label: '',
                data: [3, 2, 1],
            },
        ],
    }

    const options = {
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y'
        }
    }
    return (<Line options={options} data={data}></Line>)
}


function CardRow() {
    return (
        <>
            <Col>
                <Card>
                    <Card.Header>
                        <MainGraph />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>01/01-2023 - 01/01/2023</Card.Title>
                        <ProgressBar now={10}></ProgressBar>
                        <Card.Text>This is just some placeholder text as of current</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <MainGraph />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>01/01-2023 - 01/01/2023</Card.Title>
                        <ProgressBar now={10}></ProgressBar>
                        <Card.Text>This is just some placeholder text as of current</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <MainGraph />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>01/01-2023 - 01/01/2023</Card.Title>
                        <ProgressBar now={10}></ProgressBar>
                        <Card.Text>This is just some placeholder text as of current</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
function CardsScrapeView() {
    return (
        <>
            <Row>
                <CardRow></CardRow>
            </Row>
            <Row>
                <CardRow></CardRow>
            </Row>
        </>)
}


function MainPage() {

    return (
        <Container>
            <MainGraph />
            <h1 className="display-1 text-center">Previous Scrapes</h1>
            <CardsScrapeView />
        </Container>
    );
}

export default MainPage;