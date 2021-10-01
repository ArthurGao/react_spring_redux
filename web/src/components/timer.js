import React from 'react'
import MarketsRetriver from './marketsretriever';

class Timer extends React.Component {
    state = {
        count: 0,
        refreshinterval: 1,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 3000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.refreshinterval !== this.props.refreshinterval) {
            clearInterval(this.interval);
            this.interval = setInterval(this.tick, this.props.refreshinterval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
        });
    }

    render() {
        console.log("refresh");
        return (
            <MarketsRetriver store={this.props.store}/>
        );
    }
}
export default Timer