import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaMoon, FaSun, FaSpinner, FaBars } from 'react-icons/fa'
import useDarkMode from 'use-dark-mode'
import { ThemeContext } from './ThemeContext'

const Navbar = ({ toggleSidebar }) => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext)
  const { value: isDarkMode, enable, disable } = useDarkMode()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleThemeToggle = () => {
    toggleDarkMode()
    isDarkMode ? disable() : enable()
  }

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'></Link>
        </div>

        <ul className='nav-links'>
          <li>
            <AnchorLink to='/#about-me' className='single-link'>
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to='/#projects' className='single-link'>
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to='/#contact' className='single-link'>
              Contact
            </AnchorLink>
          </li>
        </ul>

        {!mounted ? (
          <button
            title='loading icon for theme toggle'
            className='theme-toggle loading-icon'
            disabled
          >
            <FaSpinner />
          </button>
        ) : (
          <>
            {isDark ? (
              <>
                <button
                  onClick={handleThemeToggle}
                  title='light theme'
                  className='theme-toggle theme-toggle-icon'
                >
                  <FaSun className='sun-icon' />
                </button>
                <button
                  type='button'
                  className='menu-toggle'
                  aria-label='toggle sidebar button'
                  onClick={toggleSidebar}
                >
                  <FaBars />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleThemeToggle}
                  title='dark theme'
                  className='theme-toggle theme-toggle-icon'
                >
                  <FaMoon />
                </button>
                <button
                  type='button'
                  className='menu-toggle'
                  aria-label='toggle sidebar button'
                  onClick={toggleSidebar}
                >
                  <FaBars />
                </button>
              </>
            )}
          </>
        )}
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  position: relative;
  background: var(--clr-bcg);
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  color: var(--clr-font);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
  }
  .nav-header {
    color: var(--clr-primary);
    display: flex;
    align-items: center;
    .logo-img {
      width: auto;
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-center {
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
    a {
      color: var(--clr-primary);
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }

  .single-link:hover {
    color: var(--clr-primary);
    transition: color 0.2s, box-shadow 0.2s;
    box-shadow: inset 0 -3px 0 0 var(--clr-primary);
  }

  .theme-toggle {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    color: var(--clr-primary);
    background: transparent;
    transition: var(--transition);
    font-size: 1.5rem;
    border: 2px solid transparent;
    border-radius: var(--radius);
  }

  .theme-toggle:hover {
    color: var(--clr-hover);
  }

  .theme-toggle-icon {
    cursor: pointer;
  }
  .sun-icon {
    color: var(--clr-font);
  }

  .loading-icon {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-icon {
    animation: rotate 1s linear infinite;
  }

  .menu-toggle {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 10px;
    color: var(--clr-primary);
    background: transparent;
    transition: var(--transition);
    font-size: 1.5rem;
    border: 2px solid transparent;
    border-radius: var(--radius);
    cursor: pointer;
  }
  .menu-toggle:hover {
    color: var(--clr-hover);
  }

  @media screen and (min-width: 768px) {
    .menu-toggle {
      display: none;
    }
  }
`
