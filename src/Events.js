import React, { Component } from 'react';

class Events extends Component {

    render() {
        const { events } = this.props;

        return (
            <div className="row">
                <div className = "row">
                <h2>Game Day</h2>
                </div>
                <div className = "row">
                <ul>
                {events.map(
                    (event, index) => <li className="list-group-item" key={index}>{event.title}</li>
                )
                }
                </ul>
                </div>
            </div>
        );
    }

}

export default Events;