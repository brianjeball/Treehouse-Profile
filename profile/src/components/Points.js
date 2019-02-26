import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

export default class Badges extends Component {

    constructor(props){
        super(props);
        this.state = {
            points: ''
        }
    }

    componentDidMount(){
        
    }

    render(){
        let obj = this.props.points
        
        console.log(obj)

        for (var value in obj) {
            console.log(value);
        }

        return(
            <ListGroup>

                {/* {this.props.points && this.props.points.map((point) => (
                    <ListGroup.Item> { point } </ListGroup.Item>
                )
                )} */}

                {this.state.points}
                
            </ListGroup>
        )
    }


}