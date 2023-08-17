import React from 'react'
import styled from 'styled-components'
import socialLinks from '../constants/social_links'

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-container'>
        <div className='copyright'>
          <p>&copy; {new Date().getFullYear()} - Built by Virgilio. </p>
        </div>
        <div className='social-icons'>
          {socialLinks.map((link, index) => {
            return (
              <div key={link.id} className='social-links'>
                <a
                  aria-label={link.aria || 'footer icons'}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <span title={link.name}>{link.icon}</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  background: var(--clr-bcg);
  width: 100%;
  padding: 30px 25px;
  .footer-container {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .copyright {
    width: auto;
    display: inline-block;
  }
  p {
    color: var(--clr-font);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  .social-icons {
    width: auto;
    display: inline-block;
  }
  .social-links {
    display: inline-block;
    padding-right: 19px;
    transition: opacity 0.3s ease 0s;
  }
  .social-links a {
    text-decoration: none;
    color: var(--clr-font);
  }
  .social-links a:hover {
    color: var(--clr-primary);
  }
  .social-icon.twitter {
    transform: rotate(270deg);
  }

  .social-icon {
    width: 19px;
    height: 16px;
  }

  @media (max-width: 280px) {
    .copyright {
      margin-bottom: 0.75rem;
    }
  }
`
export default Footer
