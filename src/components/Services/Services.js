import React from 'react'
import "./Services.css"
import { useTrail, animated } from 'react-spring'
import ScrollAnimation from 'react-animate-on-scroll';
import CheckIcon from '@material-ui/icons/Check';
import TypeAnimation from 'react-type-animation';


const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

function Services() {
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))

    return (
        <div className="Services">
              <h5 id="page_title">
              <TypeAnimation
                        cursor={true}
                        sequence={['Services', 3000,'       ',3000]}
                        wrapper="p"
                        repeat={Infinity}
                      />  
             </h5>  


                    <div className="container1">
                            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                                <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                                <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                                </filter>
                            </svg>
                            <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                                {trail.map((props, index) => (
                                <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                                ))}
                            </div>
                    </div>

            <div className="strength__container">
                    <ScrollAnimation animateIn='bounceInRight'animateOut='bounceOutLeft'>
                            <div className="strength__container1">
                                <div className="workflow">
                                    <ul >
                                        <li>
                                            <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={['Backend using Java and Node', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li> 
                                        <li>
                                          <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={['Database Maintenance', 4500]}
                                                wrapper="li"
                                                repeat={1}
                                            />   
                                         </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={['Frontend Using React', 5500]}
                                                wrapper="li"
                                                repeat={1}
                                            />    
                                      </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={[' Web Designing', 6500]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={[' Cross Browser Testing && Debugging', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                            <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={[' UI/UX Designing', 8500]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                     </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={[' System Designing', 9000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={['Device Responsiveness', 9500]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={['Payments', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn='flipInY'animateOut='flipOutY'>
                            <div className="strength__container1">
                                <div className="workflow">
                                    <ul>
                                        <li>
                                          <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={[' Web Development', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                          <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={[' Software Development', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                          <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={[' Freelancing', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={['  Maintaining and upgrading existing systems', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                        <li>
                                           <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={false}
                                                sequence={[' Testing and evaluating new programs', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                     </li>
                                        <li>
                                            <CheckIcon  color="secondary" /><TypeAnimation
                                                cursor={true}
                                                sequence={[' Deploying software tools, processes, and metrics', 3000]}
                                                wrapper="li"
                                                repeat={1}
                                            />  
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </ScrollAnimation>
            </div>
        </div>
    )
}

export default Services
