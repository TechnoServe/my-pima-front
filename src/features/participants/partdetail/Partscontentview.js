import React from 'react'
import Detailscontent from '../../training-group/tgdetail/Detailscontent'
import { Divider } from '@mui/material'
import Avatar from 'react-avatar'

const Partscontentview = ({ participant }) => {
  return (
    <>
      <div className='partscontent__container'>
        <div className='parts__image' style={{ display: 'flex', alignSelf: 'center' }}>
          {/* <Avatar
            alt="farmer-image"
            src={farmerimage}
            sx={{ width: 60, height: 60 }}
          /> */}
          <Avatar name={participant.full_name} size='50' textSizeRatio={1.75} round={true} color='#8A92A6' />
        </div>
        <p
          style={{
            fontSize: '14px',
            fontWeight: '500',
            paddingTop: '15px',
            paddingBottom: '15px',
            textAlign: 'center'
          }}
        >
          {participant.full_name}
        </p>

        <Divider light />

        <div className='parts__details' style={{ marginTop: ' 40px' }}>
          <div>
            <Detailscontent heading={'Full Names'} paragraph={`${participant.first_name} ${participant.middle_name !== "null"?participant.middle_name:""} ${participant.last_name}`} />
            <Detailscontent heading={'Location'} paragraph={participant.location} />
            <Detailscontent heading={'Farmer Trainer'} paragraph={participant.farmer_trainer} />
            <Detailscontent heading={'Business Advisor'} paragraph={participant.business_advisor} />
            <Detailscontent heading={'Gender'} paragraph={participant.gender === 'm' ? 'Male' : 'Female'} />
            <Detailscontent heading={'TNS ID'} paragraph={participant.tns_id} />
          </div>

          <div>
            <p style={{ fontSize: '11px', paddingTop: '40px' }}>{/* Edit Information */}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partscontentview
