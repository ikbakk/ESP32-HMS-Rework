import _ from 'lodash'
import { useState } from 'react'
import { RiEditLine, RiCloseCircleLine } from 'react-icons/ri'
import { MdOutlineKeyboardReturn, MdDeleteSweep } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import CardFront from './CardFront'
import CardBack from './CardBack'
import TimeIntervalLabel from './TimeIntervalLabel'

const CardContainer = ({ data, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const nama = data.nama
  const nilai = Object.values(data.nilai)
  const beat = nilai.map((nilai) => nilai.beat)
  const spo2 = nilai.map((nilai) => nilai.spo2)
  const temp = nilai.map((nilai) => nilai.temp)
  const timestamp = nilai.map((nilai) => nilai.timestamp)

  const flipHandle = (event) => {
    event.stopPropagation()
    setIsFlipped(!isFlipped)
  }

  let navigate = useNavigate()
  const handleCardClick = () => {
    // navigate(`detail/${sensorId}`)
    console.log('cardClicked')
  }
  const flip =
    isFlipped === true
      ? '[transform:rotateY(180deg)]'
      : '[transform:rotateY(0deg)]'

  const alert = 'bg-success'
  return (
    <>
      <div className='card-container'>
        <div className={`card-face-body ${flip}`}>
          <div
            onClick={handleCardClick}
            className={`card-face card-face-front`}>
            <div className={`card-header ${alert}`}>
              <RiEditLine size={20} className='card-button' />
              <h2 className='text-center text-2xl'>Room {index + 1}</h2>
              <RiCloseCircleLine
                size={20}
                className='card-button hover:bg-error'
              />
            </div>
            <div className='card-content-body'>
              <CardFront beat={beat} temp={temp} spo2={spo2} nama={nama} />
            </div>
            <div className='card-footer'>
              <MdDeleteSweep className='card-button' size={20} />
              <TimeIntervalLabel
                className={'font-hanken'}
                start={_.head(timestamp)}
                end={_.last(timestamp)}
              />
              <MdOutlineKeyboardReturn
                onClick={flipHandle}
                className='card-button'
                size={20}
              />
            </div>
          </div>
          <div onClick={handleCardClick} className={`card-face card-face-back`}>
            <div className={`card-header ${alert}`}>
              <RiEditLine size={20} className='card-button' />
              <h2 className='text-center text-2xl'>Room {index + 1}</h2>
              <RiCloseCircleLine
                size={20}
                className='card-button hover:bg-error'
              />
            </div>
            <div className='card-content-body'>
              <CardBack beat={beat} temp={temp} spo2={spo2} nama={nama} />
            </div>
            <div className='card-footer'>
              <MdDeleteSweep className='card-button' size={20} />
              <TimeIntervalLabel
                className={'font-hanken'}
                start={_.head(timestamp)}
                end={_.last(timestamp)}
              />
              <MdOutlineKeyboardReturn
                onClick={flipHandle}
                className='card-button'
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardContainer
