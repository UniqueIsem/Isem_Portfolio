import React, {useState} from 'react'
import { socials } from '../constants';

const Social = ({ icon }) => {
    return (
        <div className='flex flex-row items-center cursor-pointer'>
            {icon}
        </div>
    )
}

const Footer = () => {
  return (
    <footer className='flex flex-row justify-center items-center'>        
        <div>Isaac Santos</div>
        <div className='w-0.5 h-24 ms-5 bg-white'></div>
        
        <ul className='list-none hidden sm:flex flex-row gap-10 ms-20'>
          {socials.map((social) => (
            <div key={social.name}>
              <Social 
                onClick={() => window.open(social.link, "_blank")}
                icon={social.icon} />
              <div className='text-center'>{social.name}</div>
            </div>
          ))}
        </ul>
    </footer>
  )
}

export default Footer;
