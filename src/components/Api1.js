import React, { Component} from 'react';
import axios from 'axios';

class Api1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }


    componentDidMount(){
        axios.get('https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=35&lon=139&appid=e26c61176f0c049c79ce7038ccc0fc43')
        .then(res => res.data).then(data=>  
            this.setState({
                isLoaded: true,
                items: data,
            })
            );
    }
render() {
        var {isLoaded, items} = this.state;
        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                            <div>
                                <h5> <b>Weather-Forecast: </b></h5> 
                                    <h5>{items[0].weather[0].description}</h5>
                            </div>
                        
                </div>
            );
        }
    }





}

export default Api1;