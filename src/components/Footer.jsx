import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { socials } from '../constants';
import { div } from 'framer-motion/client';

const Social = ({
    icon,
    link,
}) => {
    return (
        <div onClick={() => window.open(link, "_blank")}>
            {icon}
        </div>
    )
}

const Footer = (id, link) => {
    const [active, setActive] = useState(' ');

  return (
    <footer className='flex flex-row text-center'>        
        <div>
            isaac santos
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {socials.map((social) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
            >
            </li>
          ))}
        </ul>
    </footer>
  )
}

export default Footer;
