import React, { Component } from 'react';

class Header extends Component {

    render() {
        const { days } = this.props;

        return(

        <tr>
            {days.map(
                (day, index) => <th key={index}>{day}</th>
            )
            }
        </tr>
        );
    }

}

export default Header;