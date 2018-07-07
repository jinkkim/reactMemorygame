'use strict';

import React from "react";

module.exports = React.createClass({
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="/">Clicky Game</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <div className="text-white offset-4">{this.props.message}</div>
                    <div className="text-white">Score: <span style={{color: "yellow"}}>{this.props.curScore}</span>  | Top Score: {this.props.topScore}</div>
                </div>
            </nav>
        )
    }
})
