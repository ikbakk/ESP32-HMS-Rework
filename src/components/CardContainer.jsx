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
  const [alert, setAlert] = useState('bg-success')

  const nama = data.nama
  const nilai = Object.values(data.nilai)
  const beat = nilai.map((nilai) => nilai.beat)
  const spo2 = nilai.map((nilai) => nilai.spo2)
  const temp = nilai.map((nilai) => nilai.temp)
  const timestamp = nilai.map((nilai) => nilai.timestamp)

  const range = () => {
    const rangeBeat = _.inRange(_.mean(_.compact(beat)), 60, 100)
    const rangeSpo2 = _.inRange(_.mean(_.compact(spo2)), 95, 100)
    const rangeTemp = _.inRange(_.mean(_.compact(temp)), 36.1, 37.2)
    return { a: rangeBeat, b: rangeSpo2, c: rangeTemp }
  }
  const paramRange = range()

  const danger = { a: false, b: false, c: false }
  const warnBeat = { a: false, b: true, c: true }
  const warnOxy = { a: true, b: false, c: true }
  const warnTemp = { a: true, b: true, c: false }

  const colorCode = (object) => {
    let result = ' '
    let message = ' '
    if (_.isEqual(_.mean(beat), 0)) {
      result = 'bg-info'
      message = `Data ${_.upperCase(
        nama
      )} tidak tersedia di RUANG ${_.upperCase(index + 1)}`
    } else if (_.isEqual(object, danger)) {
      result = 'bg-error'
      message = `Periksa oksimeter dan sensor suhu ${_.upperCase(
        nama
      )} di RUANG ${_.upperCase(index + 1)}`
    } else if (_.isEqual(object, warnOxy)) {
      result = 'bg-warning text-accent'
      message = `Periksa oksimeter ${_.upperCase(nama)} di RUANG ${_.upperCase(
        index + 1
      )}`
    } else if (_.isEqual(object, warnBeat)) {
      result = 'bg-warning text-accent'
      message = `Periksa oksimeter ${_.upperCase(nama)} di RUANG ${_.upperCase(
        index + 1
      )}`
    } else if (_.isEqual(object, warnTemp)) {
      result = 'bg-warning text-accent'
      message = `Periksa sensor suhu ${_.upperCase(
        nama
      )} di RUANG ${_.upperCase(index + 1)}`
    } else {
      result = 'bg-success'
      message = ' '
    }
    return { className: result, toast: message }
  }

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

  return (
    <>
      <div className='card-container'>
        <div className={`card-face-body ${flip}`}>
          <div
            onClick={handleCardClick}
            className={`card-face card-face-front`}>
            <div className={`card-header ${colorCode(paramRange).className}`}>
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
            <div className={`card-header ${colorCode(paramRange).className}`}>
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
