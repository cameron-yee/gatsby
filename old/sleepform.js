import React from 'react'
import 'bulma/bulma.sass'

const SleepForm = (props) => (
  <form name="sleep" method="POST" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
    <div className="columns is-multiline">
      <div className="column is-half">
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input name="First Name" className="input" type="text" placeholder="First Name" />
          </div>
        </div>
      </div>
      <div className="column is-half">
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input name="Last Name" className="input" type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="field">
          <label className="label">Bed Time</label>
          <div className="control">
            <input name="Bed Time" className="input" type="time" />
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="field">
          <label className="label">Wake Up Time</label>
          <div className="control">
            <input name="Wake Up Time" className="input" type="time" />
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <input name="Date" className="input" type="date" />
          </div>
        </div>
      </div>
      <div className="column is-full">
        <div className="field">
          <label className="label">Notes</label>
          <div className="control">
            <textarea name="Notes" className="textarea" type="Textarea" placeholder="Ex. Woke up at 3am"></textarea>
          </div>
        </div>
      </div>
    </div>
    <input className="button is-primary" type="submit" /> 
  </form>
)

export default SleepForm

