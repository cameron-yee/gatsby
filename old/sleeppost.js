import React from 'react'
import 'bulma/bulma.sass'
import axios from 'axios'
import { Link } from 'gatsby'

class SleepPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bedtime: '12:00 AM',
        wakeup: '08:00 AM',
        day: 'Monday 10/23',
        hours: 8,
        notes: 'Ex. Woke up at 3 AM',
      }
      this.updateBedtime = this.updateBedtime.bind(this);
      this.updateWakup = this.updateWakup.bind(this);
      this.updateHours = this.updateHours.bind(this);
      this.updateDay = this.updateDay.bind(this);
      this.updateNotes = this.updateNotes.bind(this);
      this.postSleep = this.postSleep.bind(this);
    }

    updateBedtime(event) {
      this.setState({bedtime: event.target.value})
    }

    updateWakup(event) {
      this.setState({wakeup: event.target.value})
    }

    updateHours(event) {
      this.setState({hours: event.target.value})
    }

    updateDay(event) {
      this.setState({day: event.target.value})
    }

    updateNotes(event) {
      this.setState({notes: event.target.value})
    }

    postSleep(event) {
      console.log(this.state);

      axios
        // .post(`http://localhost:1337/posts`, {
        .post(`http://localhost:3000/api/Posts`, {
          user: 1,
          bedtime: this.state.bedtime,
          wakeup: this.state.wakeup,
          hours: this.state.hours,
          day: this.state.day,
          notes: this.state.notes
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('ERROR:', error)
        })

    }

    render() {
      return (
        <form name="sleep" method="POST" onSubmit={this.postSleep} action="/success">
          <input type="hidden" name="bot-field" />
          <div className="columns is-multiline">
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Bedtime</label>
                <div className="control">
                  <input name="bedtime" className="input" type="text" value={this.state.bedtime} onChange={this.updateBedtime} />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Wakeup</label>
                <div className="control">
                  <input name="wakeup" className="input" type="text" value={this.state.wakeup} onChange={this.updateWakup} />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Hours</label>
                <div className="control">
                  <input name="hours" className="input" type="number" value={this.state.hours} onChange={this.updateHours} />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Day</label>
                <div className="control">
                  <input name="day" className="input" type="text" value={this.state.day} onChange={this.updateDay} />
                </div>
              </div>
            </div>
            <div className="column is-full">
              <div className="field">
                <label className="label">Notes</label>
                <div className="control">
                  <textarea name="notes" className="textarea" type="Textarea" value={this.state.notes} onChange={this.updateNotes} ></textarea>
                </div>
              </div>
            </div>
          </div>
          <input className="button is-primary" type="submit" value="Submit" /> 
        </form>
      );
    }
}

export default SleepPost


