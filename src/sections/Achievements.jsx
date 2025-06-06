import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { achievements } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'

export const Achievements = () => {
  return (
    <section id="achievements" className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title="My Achievements" sub="🏆 Milestones That Define Me"/>

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {achievements.map((achievement)=>(
                    <GlowCard card={achievement}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={achievement.imgPath} alt={achievement.name} />
                            </div>
                            <div>
                                <p className='font-bold'>{achievement.name}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}
