import React from 'react'
import Markets from './market';

class MarketsRetriver extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        fetch('http://localhost:8080/maps')
        .then(res => res.json())
        .then((data) => {
            this.setState({ markets: data })
        })
        .catch(console.log)
        return (
            <Markets markets={this.state.markets} store={this.props.store}/>
        )
    }

    state = {
        markets: []
    };

 
}
export default MarketsRetriver