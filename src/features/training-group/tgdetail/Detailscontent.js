import React from 'react'
import './tgdetail.css'
import { LiaCircleSolid } from 'react-icons/lia'

const Detailscontent = ({ heading, paragraph }) => {
  return (
    <div className='details__content'>
      <LiaCircleSolid color='#3A57E8' />
      <div className='details__content2'>
        <p className='details__para'>{heading}</p>
        <p className='details__para2'>{paragraph}</p>
      </div>
    </div>
  )
}

export default Detailscontent
