import * as React from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import socialLinks from '../constants/social_links'
import { Seo, Footer, Title } from '../components/'

const IndexPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const formRef = useRef(null)

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const isFormEmpty = () => {
    return name === '' || email === '' || message === ''
  }

  const handleChangeName = (e) => {
    e.preventDefault()
    console.log(
      'darkMode value in handleChangeName:',
      localStorage.getItem('darkMode')
    )

    setName(e.target.value)
  }

  const handleOnFocus = (e) => {
    e.preventDefault()
    console.log(
      'darkMode value in handleOnFocus:',
      localStorage.getItem('darkMode')
    )
  }

  const handleOnBlur = (e) => {
    e.preventDefault()
    console.log(
      'darkMode value in handleOnBlur:',
      localStorage.getItem('darkMode')
    )
  }

  const handleChangeEmail = (e) => {
    e.preventDefault()

    console.log(
      'darkMode value in handleChangeEmail:',
      localStorage.getItem('darkMode')
    )

    setEmail(e.target.value)
    setIsValidEmail(validateEmail(e.target.value))
  }

  const handleChangeMessage = (e) => {
    e.preventDefault()
    console.log(
      'darkMode value in handleChangeMessage:',
      localStorage.getItem('darkMode')
    )
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(
      'darkMode value in handleSubmit:',
      localStorage.getItem('darkMode')
    )

    if (!isFormEmpty() && isValidEmail) {
      formRef.current.submit()
      setTimeout(() => {
        formRef.current.reset()
        setName('')
        setEmail('')
        setMessage('')
      }, 3000)
    }
  }

  return (
    <>
      <Seo Sitetitle='Home' />
      <Wrapper id='contact' className='contact-wrapper'>
        <Title title='Contact Me' />
        <div className='info'>
          <article className='contact-form'>
            <div className='contact-divider contact-info'>
              <p>Hi! Hola! Oi!</p>
              <p>
                Do you have a question? Or want to collaborate on a project? Or
                want to say hi? I'm here to help.{' '}
              </p>
              <p>
                You can contact me using the form or any of the links below.
              </p>
              <div className='social-icons'>
                {socialLinks.map((link, index) => {
                  return (
                    <div key={link.id} className='social-links'>
                      <a
                        aria-label={link.aria || 'social media icons'}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link'
                      >
                        {link.icon}
                        <span className='icon-name'>{link.name}</span>
                      </a>
                    </div>
                  )
                })}
              </div>
              <p>
                {' '}
                If you have a specific topic you'd like to discuss, feel free to
                include it in your message. I'll do my best to get back to you
                soon.
              </p>
            </div>
            <div className='contact-form-wrapper'>
              <div className='contact-divider'>
                <form
                  method='POST'
                  action='https://formspree.io/f/xjvdyaon'
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div className='form-group'>
                    <label htmlFor='name' className='form-labels'>
                      Name:{' '}
                      <input
                        type='text'
                        id='name'
                        name='Name'
                        placeholder='john doe'
                        className='form-control'
                        value={name}
                        onChange={handleChangeName}
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        autoComplete='name'
                        required
                      />
                    </label>

                    <label htmlFor='email' className='form-labels'>
                      Email:{' '}
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='johndoe@email.com'
                        className='form-control'
                        value={email}
                        onChange={handleChangeEmail}
                        autoComplete='email'
                        required
                      />
                      {!isValidEmail && (
                        <span style={{ color: 'red' }}>
                          Please enter a valid email address
                        </span>
                      )}
                    </label>

                    <label htmlFor='message' className='form-labels'>
                      Message:{' '}
                      <textarea
                        id='message'
                        name='message'
                        cols='5'
                        placeholder='Hi, I would love to talk about...'
                        className='form-control'
                        rows='3'
                        value={message}
                        onChange={handleChangeMessage}
                        autoComplete='off'
                        required
                      ></textarea>
                    </label>

                    {isValidEmail && !isFormEmpty() && (
                      <button
                        type='submit'
                        aria-label='Lets talk contact submit button'
                        className='submit-btn btn'
                      >
                        Let's talk
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </article>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Kurai Modo</title>

const Wrapper = styled.section`
  background: var(--clr-bcg);
  height: 100vh;
  padding-top: 2rem;
  position: relative;

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    margin-top: clamp(0.5rem, 1rem, 2rem);
  }

  .contact-page {
    display: grid;
    place-items: center;
    padding: 5rem 0;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: var(--radius);
    text-align: center;
    width: 90vw;
  }

  .contact-divider {
    width: 100%;
  }

  .contact-form p {
    text-align: justify;
    padding: 0 24px;
    line-height: 2;
    letter-spacing: 1px;
    color: var(--clr-font);
    margin-top: clamp(0.5em, 1em, 1.25em);
    margin-bottom: clamp(0.5em, 1em, 1.25em);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-font);
    font-weight: 500;
    text-transform: none;
    margin-top: clamp(0.5rem, 1rem, 2rem);
    margin-bottom: clamp(0.5rem, 1rem, 2rem);
  }
  article {
    width: 85vw;
    max-width: 850px;
    text-align: center;
  }
  form {
    width: 100%;
  }

  .form-group {
    padding: clamp(0.5rem, 0.75rem, 1rem) clamp(0.75rem, 1rem, 1.5rem);
  }
  .form-labels {
    color: var(--clr-grey-7);
    display: block;
    width: 100%;
    padding: 0.75rem rem 1rem;
    text-align: left;
    margin: 0.5rem 0;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin: clamp(0.5rem, 0.75rem, 1rem) 0;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: none;
    font-family: var(--font-family-body);
    outline: none;
    box-shadow: 0 0 0 2px var(--clr-primary);
  }
  .form-control::placeholder {
    font-family: var(--font-family-body);
    color: var(--clr-grey-9);
    text-transform: none;
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .submit-btn:disabled {
    cursor: none;
    background: var(--clr-grey-5);
  }
  .social-icons {
    vertical-align: middle;
    line-height: 1.75;
    text-align: left;
    padding: 0px 24px;
  }
  .social-links {
    padding: 10px 0px;
    transition: opacity 0.3s ease 0s;
  }
  .social-links a {
    text-decoration: none;
    color: var(--clr-primary);
  }
  .social-links a:hover {
    color: var(--clr-hover);
  }

  .social-icon.twitter {
    transform: rotate(270deg);
  }

  .icon-name {
    margin-left: 1rem;
  }
  .social-icon {
    vertical-align: middle;
    width: 29px;
    height: 26px;
  }
  @media (max-width: 768px) {
    height: clamp(1050px, 100vh, 120vh);
    .social-icons {
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 280px) {
    height: 180vh;
    .social-icons {
      margin: 0.75rem 0;
    }
    .social-icon {
      width: 19px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    .contact-form {
      display: grid;
      grid-template-columns: 60% 40%;
      grid-gap: 2rem;
    }

    .contact-info {
      grid-column: 1;
    }

    .contact-form-wrapper {
      grid-column: 2;
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
    }

    .contact-links {
      align-self: flex-end;
    }
  }

  .form-control.invalid-email {
    box-shadow: 0 0 0 2px red;
  }

  textarea {
    resize: none;
  }
`
