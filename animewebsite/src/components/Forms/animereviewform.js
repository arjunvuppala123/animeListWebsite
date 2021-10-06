import React from "react";
import Form from 'react-bootstrap/Form'
import "./review.css"

function ReviewForm() {
    return (
        <div className="review">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Enter Review: </h1>
                </div>
            </div>
            <br />
            <hr/>
            <br />
            <Form className="Form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="label">Anime Title :</Form.Label>
                    <Form.Control type="text" placeholder="Anime Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="label">Heading :</Form.Label>
                    <Form.Control type="text" placeholder="Heading" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="label">Score(out of 10) :</Form.Label>
                    <Form.Control type="number" placeholder="Score" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label">Review :</Form.Label>
                    <Form.Control className="overflow-auto" placeholder="Review" as="textarea" rows={5} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="label">Image Link :</Form.Label>
                    <Form.Control type="number" placeholder="Anime poster" />
                </Form.Group>
<button>Submit</button>
            </Form>
        </div>
    );
}

export default ReviewForm;