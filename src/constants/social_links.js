import React from 'react'
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaMastodon,
} from 'react-icons/fa'

const data = [
  {
    id: 401,
    icon: <FaEnvelope className='social-icon'></FaEnvelope>,
    url: 'mailto:hello@virgiliocordero.com',
    aria: 'email mailto link',
    name: 'Email',
    rel: 'me',
  },
  {
    id: 402,
    icon: <FaGithub className='social-icon'></FaGithub>,
    url: 'https://github.com/vcordero07/',
    aria: 'github profile link',
    name: 'GitHub',
    rel: 'me',
  },
  {
    id: 403,
    icon: <FaLinkedinIn className='social-icon'></FaLinkedinIn>,
    url: 'https://www.linkedin.com/in/virgilio-cordero',
    aria: 'linkedin profile link',
    name: 'LinkedIn',
    rel: 'me',
  },
  {
    id: 404,
    icon: <FaTwitter className='social-icon twitter'></FaTwitter>,
    url: 'https://twitter.com/vcordero07/',
    aria: 'x profile link',
    name: '\u{1D54F}',
    rel: 'me',
  },
  {
    id: 405,
    icon: <FaMastodon className='social-icon'></FaMastodon>,
    url: 'https://mastodon.social/@vcordero07',
    aria: 'mastodon profile link',
    name: 'Mastodon',
    rel: 'me',
  },
]

export default data
