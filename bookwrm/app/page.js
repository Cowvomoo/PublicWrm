'use client';
import {useState} from 'react'
import { Inter } from 'next/font/google'
import { resolve } from 'styled-jsx/css';
import Section from './section.js'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Larrys />
      <div className='LessonsTab'> 
      <Lesson>This is the math text</Lesson>
      </div>
    </div>
  )
}

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

const Larrys = () => {
  return (
  <fieldset className="homeinfo">
    <section className='sectioninfo'>
      <img
        className="larry_backpack"
        src="https://cdn.discordapp.com/attachments/769220443692990474/1070107117207437363/Larry_Backpack_White_nobg.png"
      />
      <div className="text1 font-tnr">
        <span>CROSS THE LIMITS OF YOUR KNOWLEDGE</span>
        <h2>Reclaim Education</h2>
        <p className="p1">
          At Bookwrm, it doesn't matter what your background is, anyone is
          welcome! No subscription or donations are required to access any
          lecture.
        </p>
      </div>
    </section>
    <Section>
      <img
        className="larry_backpack"
        src="https://cdn.discordapp.com/attachments/769220443692990474/1070107117207437363/Larry_Backpack_White_nobg.png"
      />
      <div className="text1 font-tnr">
        <span>CROSS THE LIMITS OF YOUR KNOWLEDGE</span>
        <h2 className=' font-semibold'>Reclaim Education</h2>
        <p className="p1">
          At Bookwrm, it doesn't matter what your background is, anyone is
          welcome! No subscription or donations are required to access any
          lecture.
        </p>
      </div>
    </Section>
    <Section>
      <div className="text2 font-tnr">
        <span>LESSONS</span>
        <h2 className=' font-semibold'>Access Free 24/7 Learning Videos</h2>
        <p className="p2">
          It's not just videos. Build a strong understanding of tough concepts
          through interactive lessons reviewed by proffessionals!
        </p>
      </div>
      <img
        className="Larry_Math"
        src="https://cdn.discordapp.com/attachments/769220443692990474/1070129520008495255/Larry_Math_White-removebg-preview.png"
      />
    </Section>
    <Section>
      <img
        className="Larry_Science"
        src="https://cdn.discordapp.com/attachments/769220443692990474/1070105945293717564/IMG_4206.jpg"
      />
      <div className="text3 font-tnr">
        <span>NOTES</span>
        <h2 className='font-semibold'>Share your knowledge</h2>
        <p className="p3">
          Help other students by sharing your notes in our community. We make sure
          that the best notes are displayed to everyone.
        </p>
      </div>
      <img
        className="Larry_Reading"
        src="https://cdn.discordapp.com/attachments/769220443692990474/1070130019638202378/Larry_Reading_White-removebg-preview.png"
      />
    </Section>
  </fieldset>
  )
}

const Lesson = (props) => {

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const changeShow = () => {
    setShow(!show)
    
    console.log('snignig9')
  }
  return (
    <div className="container">
          <input type="checkbox" id="check1" />
          <label onClick={() => changeShow()} htmlFor="check1" className={show ? 'bar bar1' : 'bar'} style={{}}>Math: 6th Grade</label>
          <div className={show ? 'data data1 show' : 'data data1'}>{show && props.children}</div>
          
    </div>

    
    // <div className="container">
    //   <button id="check1" className="" onClick={() => changeShow()}>
    //     <div className={show ? 'data show' : 'data'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    //   </button>
    // <p>{show && 'hi'}</p>
    // <p>{!show && 'not hi'}</p>
    // </div>
  )
}

const Li = ({ children }) => {
  return (
    <li className=' '>{children}</li>
  )
}