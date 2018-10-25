import React from 'react'
import 'bulma/bulma.sass'

const Form = (props) => (
  <div className="columns is-multiline">
    <div className="column is-half">
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="First Name" />
        </div>
      </div>
    </div>
    <div className="column is-half">
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Last Name" />
        </div>
      </div>
    </div>
    <div className="column is-full">
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="Email" />
        </div>
      </div>
    </div>
    <div className="column is-full">
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" type="Textarea" placeholder="Message"></textarea>
        </div>
      </div>
    </div>
  </div>
)

export default Form
