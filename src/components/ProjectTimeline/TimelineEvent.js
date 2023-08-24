// TimelineEvent.js
import React from 'react'

const TimelineEvent = ({ event }) => {
  return (
    <div className='timeline-event'>
      <span className='event-date'>{event.date}</span>
      <span className='event-title'>{event.title}</span>
    </div>
  )
}

export default TimelineEvent
