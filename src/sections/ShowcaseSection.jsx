import React,{useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);

    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {y:50,opacity:0},
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay: 0.3*(index+1),
                    scrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1,duration:1.5}
        )
    },[]);
  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                {/* CHANGE ACCORDING TO YOURS */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/lms_2.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>Learning Management System</h2>
                        <p>A web-based platform designed to streamline the delivery, tracking, and management of educational content. The system allows instructors to create and manage courses, upload learning materials, assign tasks, and evaluate performance, while students can access resources, track progress, and submit assignments, all in one centralized portal. The system supports user authentication, role-based access, and real-time notifications to enhance the learning experience.</p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#e3ffdb]'>
                            <img src="/images/tappytalk.png" alt="Library Management" />
                        </div>
                        <h2>TappyTalk — A Real-time Chat Application</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#8a62c6]'>
                            <img src="/images/scanly.png" alt="Library Management" />
                        </div>
                        <h2>ScanlyAI — Smart Resume Analyzer tool</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection