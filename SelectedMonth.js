import React, { Component } from 'react';

class SelectedMonth extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.handleMonth(event.target.value);
    }

    render() {
        const { calendar, sm } = this.props;

        return (

            <div className="row" id = "monthtitle">


                <div className="col-md-2" id = "button">
                    <button onClick={this.handleClick} value="prev">&lt;</button>
                </div>

                <div className="col-md-7">
                    <h2>{calendar[sm].month}</h2> 
                </div>
                
                <div className="col-md-2" id = "button">
                    <button onClick={this.handleClick} value="next">&gt;</button>
                </div>

                
            </div>

        );
    }
}

export default SelectedMonth;