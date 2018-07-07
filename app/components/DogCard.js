'use strict';

import React from "react";

module.exports = React.createClass({
    render(){
        return (
            <figure>
                <a onClick={() => this.props.selectDog(this.props.breed)}>
                <img className="img-thumbnail"
                     style={{width: "200px", height:"150px"}}
                     src={this.props.image}
                     alt={this.props.breed}></img>
                </a>  
            </figure>
        )
    }
});