'use strict';

import React from 'react'
import Nav from './Nav'
import Title from './Title'
import Dogs from './Dogs.json'
import DogCard from './DogCard'


module.exports = React.createClass({
    getInitialState(){
        return {
            message: "Click an image to begin!",
            topScore: 0,
            curScore: 0,
            dogs: Dogs,
            unselectedDogs: Dogs
        }
    },

    shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    selectDog(breed) {
        const findDog = this.state.unselectedDogs.find(item => item.breed === breed);

        if(findDog === undefined) {
            // failure to select a new dog
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                dogs: Dogs,
                unselectedDogs: Dogs
            });
        } else {
            // success to select a new dog
            const newDogs = this.state.unselectedDogs.filter(item => item.breed !== breed);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                dogs: Dogs,
                unselectedDogs: newDogs
            });
        }
        this.shuffleArray(Dogs);
    },

    render() {
        return (
            <div>
                <Nav  message={this.state.message}
                      curScore={this.state.curScore}
                      topScore={this.state.topScore} />
                <Title />

                <div className="row justify-content-around mt-3">
                    {this.state.dogs.map(dog => (
                        <DogCard breed={dog.breed}
                                image={dog.image}
                                selectDog={this.selectDog} 
                                curScore={this.state.curScore} />
                    ))}
                </div>
            </div>
        )
    }
});