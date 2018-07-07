'use strict';

import React from "react";

module.exports = React.createClass({
    render(){
        return (
            <div className="border">
                <div className="text-center h1 p-4">Dog Clicky Game!</div>
                <p className="text-center">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        )
    }
})