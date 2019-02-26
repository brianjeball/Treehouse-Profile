import React, { Component } from 'react'
import {Image, Col, Container} from 'react-bootstrap'

export default class MainProfile extends Component {

    constructor(props){
        super(props);

        this.state = {
            profile: null
        }
    }

    render(){
        return(
            <div>
                <Container>
                    <Col xs={6} md={4}>
                        <Image src={this.props.profile.gravatar_url} rounded />
                    </Col>
                </Container>

                <h1>{this.props.profile.name}</h1>
                <h3><span className="text-muted">Profile Name: </span>{this.props.profile.profile_name}</h3>
                

            </div>

        )
    }

}