import { Component } from "react"

import Car from '../Car/Car'


export default class BasicBlock extends Component {

    state = {
        cars: [
            {name: 'Ferarri', year: '2020'},
            {name: 'Ford', year: '1020'},
            {name: 'Mazda', year: '2010'},
            {name: 'Porche', year: '1999'}
        ],
        pageTitle: 'Default title',
        showcars: false
    }
    handleInputChange = (event) => {
        console.log('Changed', event.target.value)
        this.setState({pageTitle: event.target.value})
    }

    changeTitleHandler = (newTitle) => {
        this.setState({pageTitle: newTitle})
    }

    render() {
        return <div style={{textAlign: 'center'}}>
            <h1>{this.state.pageTitle}</h1>
            <input type="text" onChange={this.handleInputChange}></input>

            { this.state.cars.map((car, index)=> <Car name={car.name} 
                year={car.year}
                onChangeTitle={ ()=> this.changeTitleHandler(car.name)}
                key={index}
            ></Car>)}
            {/* <Car name={cars[0].name} year={cars[0].year}></Car>
            <Car name={cars[1].name} year={cars[1].year}></Car>
            <Car name={cars[2].name} year={cars[2].year}></Car>
            <Car name={cars[3].name} year={cars[3].year}></Car> */}
        </div>
    }
}