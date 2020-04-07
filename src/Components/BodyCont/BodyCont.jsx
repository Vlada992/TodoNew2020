import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import './BodyCont.css'

class BodyCont extends Component {

    render() {
        const {handleKeyPress} = this.props;

        return (
            <div >
                <Form>
                    <Form.Group as={Row} id="formBasicText">
                        <Col id='colId1' sm={4}>
                            <Form.Control 
                            onKeyPress={e => handleKeyPress(e)} 
                            id='formControlText' 
                            type="text" 
                            placeholder="What needs to be done?" />
                        </Col>

                    </Form.Group>

                </Form>
            </div>
        )
    }
}


export default BodyCont;


//13 is charCode for key press - Enter