import React, { Component } from 'react';
import Header from './Header';

class Month extends Component {
    
    month() {
        const {calendar, sm} = this.props;
        var selectedMonth = calendar[sm]
        var month = [];
        var dayofmonth = 1;
        var monthLength = selectedMonth.monthLength;
        var i = selectedMonth.firstMonthDay-1;
        while (dayofmonth < monthLength) {
            var week = ["\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"];    
            for (i; i<7; i++){
                week[i] = dayofmonth;
                if (dayofmonth === monthLength) {
                    break;
                }
                dayofmonth++;
            }
            month.push({"week":week})
            i = 0;
        }
        return month;
    }

    render() {
        const  month = this.month();
        const { days } = this.props;

        return(
            <tbody>
                <Header days={days} />
                {month.map((week, index) => {
                    return (<tr key={index}> 

                        {week.week.map(
                            (day, i) => { 
                                return(<td key={i}>{day}</td>)
                            }
                        )
                        }
                        
                        </tr>);
                })}
            </tbody>
        );
    }
}

export default Month;