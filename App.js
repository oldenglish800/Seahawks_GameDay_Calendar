import React, { Component } from 'react';
import './App.css';
import SelectedMonth from './SelectedMonth';
import Month from './Month';
import Events from './Events';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      days:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
      selectedMonth: 0,
      calendar: [{
          month: "August",
          year: 2017,
          firstMonthDay: 2,
          monthLength: 31
        }
        , {
          month: "September",
          year: 2017,
          firstMonthDay: 5,
          monthLength: 30
        },  {
          month: "October",
          year: 2017,
          firstMonthDay: 7,
          monthLength: 31
        }
      ],
      events: [{
        title: "Event Test",
        date: 9/17/2017,
        description: "This a test"
      }
      ]
    };

    this.handleMonth = this.handleMonth.bind(this);
  }

  handleMonth(month) {
    var tempInt = 0;
    if (month === "prev") {
      tempInt = this.state.selectedMonth - 1
    } else if (month === "next") {
      tempInt = this.state.selectedMonth + 1
    }

    if (tempInt < 0 || tempInt === this.state.calendar.length) {
      this.setState({
        selectedMonth: this.state.selectedMonth
      
      });
    } else {
      this.setState({
        selectedMonth: tempInt
      
      });
    }

  }

  handleEvents(event) {
    
  }

  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row">


          <div className="col-md-9">
            <SelectedMonth calendar={this.state.calendar} handleMonth={this.handleMonth} sm = {this.state.selectedMonth} />
            <div className="row">
              <table>
                <Month calendar={this.state.calendar} sm = {this.state.selectedMonth} days={this.state.days}/>
              </table>
            </div>
          </div>
          
          <div className="col-md-3">
            <Events events={this.state.events}/>
          </div>


      </div>
      </div>
      </div>
    );
  }
}

export default App;