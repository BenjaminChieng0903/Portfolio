import React from 'react'
import { useState } from 'react'
import './ContactMe.css'
import axiosApi from '../../axiosApi/app'
const COntactMe = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const submitEnquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axiosApi
      .post('/home/submit', {
        name: name,
        email: email,
        text: text,
      })
      .then(() => {
        alert('submit successfully!')
      })
      .catch(() => {
        alert('sorry, something went wrong')
      })
  }
  console.log(name)
  return (
    <section className="contact-me-section">
      <span>(*)</span>
      <h1 className="any-section-title">&lt;Contact_me&gt;</h1>
      <p className="any-section-intro">
        (//.. Contact/Enquire the future rising star in IT industry)
      </p>
      <form className="contact-form" onSubmit={(e) => submitEnquiry(e)}>
        <input
          type="text"
          placeholder="_name*"
          required
          onChange={(e) => setName(e?.target.value)}
        ></input>
        <input
          type="email"
          placeholder="_email*"
          required
          onChange={(e) => setEmail(e?.target.value)}
        ></input>
        <textarea
          className="message"
          placeholder="_message*"
          required
          onChange={(e) => setText(e?.target.value)}
        ></textarea>
        <button className="homepage-button" type="submit">
          &#123;send&#125;
        </button>
      </form>
    </section>
  )
}

export default COntactMe
