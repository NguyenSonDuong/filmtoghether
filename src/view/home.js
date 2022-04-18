import React from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles2 from './style/style.module.css'

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secon :20,
            time : 1
        };
        this.ClickNext = this.ClickNext.bind(this)
    }
    ClickNext() {
       this.setState( {secon : this.state.secon+1});
    }

    render() {
        return (
            <div>
                <div>{this.state.secon}</div>
                <Button variant="primary" onClick={this.ClickNext}>{this.state.secon}</Button>
                <Button  className={styles2.btnA} > Button #2 </Button>
            </div>
        );
    }
}

export default HomeView;