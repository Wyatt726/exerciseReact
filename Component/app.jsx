import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './app.css'

class App extends Component {
    constructor(props){
        super(props);
        this.superheroes =[
            {superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'},
            {name: 'All the Light We Cannot See', author: 'Anthony Doerr'},
            {name: 'The First and Last Freedom', author: 'Jiddu Krishnamurit'},
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            },
        ]
        this.state= {
            SuperHeroNumber: 1
        };  
}


    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} />
                <BookCreator createNewBook={this.createBook} />
                <Footer />
            </div>
        )
    }
}

export default App;

render(){
    return (
    <h1>Our React App From A Component File</h1>)
}

//Exercise 1
state = {
    firstName: 'Reggie',
    lastName: 'White'
}

//Exercise 2
state = {
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
}

//Exercise 3
state = {
    superheroes = [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondarAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondarAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondarAbility: 'Shoots web'
        }
    ]
}