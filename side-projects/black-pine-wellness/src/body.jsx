import { useState } from 'react'
import './App.css'
import reikiImage from  "./assets/reiki-image.webp"
import tarotImage from "./assets/tarot-image.webp"
import massageImage from "./assets/massage-image.webp"



export default function Body(){
    return(
        <div className='main-container'>
            <div className='options-header'>
                    <h1 className='center-h'>Wellness Options</h1>
                    <p className='center-p'>Find Your Center</p>
            </div>
            
            <div className='massage'>
                <h1>Massage <span className='balance'>Balance Your Body</span></h1>
                <h4 className='massage-style'>Styles of Massage</h4>
                <h5 className='massage-type'>Swedish Massage</h5>
                <p className='massage-info'>This is a gentle form of massage that uses long strokes, kneading, deep circular movements, vibration and tapping. It helps you feel relaxed and energized.</p>
                <h5 className='massage-type'>Deep Massage</h5>
                <p className='massage-info'>This massage technique uses slower, more-forceful strokes to target the deeper layers of muscle and connective tissue. It's commonly used to help with muscle damage from injuries.</p>
                <h6 className='massage-list-header'>Massage benefits can include:</h6>
                <ul className='massage-list'>
                    <li>Reducing physical and emotional stress</li>
                    <li>Increasing mind and body relaxation</li>
                    <li>Reducing pain, muscle soreness and body tension</li>
                    <li>Improves circulation, energy and alertness</li>
                    <li>Assists in lowering heart rate and blood pressure</li>
                    <li>Helps support Improving immune function</li>
                </ul>
            </div>

            <div className='massage'>
                <h1>Reiki <span className='balance'>Balance Your Energy</span></h1>
                <p className='massage-info'>This can be used in conjunction with other alternative therapies. It takes into account the whole person and helps activate each patient’s natural healing processes as well as restoring their physical and emotional well-being.</p>
            </div>

            <div className='massage'>
                <h1>Tarot Reading <span className='balance'>Natural Wisdom</span></h1>
                <p className='massage-info'>Tarot has a broad range of practices based on generations of tradition. After a single session, you’ll start to see changes to your situation, soul and mind. Contact me to find out more.</p>
            </div>

            <img src={reikiImage} className="reiki-image"/>
            <img src={tarotImage} className="tarot-image"/>
            <img src={massageImage} className="massage-image"/>

            

            <div className="contact">
                <div className='contact-info'>
                    <h1>Contact Me</h1>
                    <p>Shanna Carter</p>
                    <p>2895 S Hwy 89, Perry, UT 84302</p>
                    <p>(435) 720-1096</p>
                </div>


                <div className='request-container'>
                    <form className='request-form'>
                        <input id='request1' className="input-field" type="name" placeholder='Name'></input>
                        <input id='request2' className="input-field" type="email" placeholder='Email'></input>
                        <input id='request3' className="input-field" type="phone" placeholder='Phone'></input>
                        <input id='request4' className="input-field" type="address" placeholder='Address'></input>
                        <div className='checkboxes'>
                            <div className='checkbox-div'>Massage: <input className="input-checkbox1" name='massage' type="checkbox" ></input></div>
                            <div className='checkbox-div'>Reiki: <input className="input-checkbox2" name='reiki' type="checkbox"></input></div>
                            <div className='checkbox-div'>Tarot Reading: <input className="input-checkbox3" name='tarot-reading' type="checkbox"></input></div>
                        </div>
                        <textarea className="input-message" rows="10" cols="20" placeholder='Message'></textarea>
                        <button className='submit'>Submit</button>
                    </form>
                </div>
                <div className='price-container'>
                    <h1 className='priceHeader'>Pricing:</h1>
                    <h4 className='prices'>Massage~$1.00 a Minute; 30, 60, 90 Sessions</h4>
                    <h4 className='prices'>Reiki~$60 for a 1 hr session</h4>
                    <h4 className='prices'>Tarot Reading~$50 for a 1 hr reading</h4>
                </div>
            </div> 
        </div>
    )
}