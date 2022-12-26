import _ from 'lodash'
import { useState } from 'react'
import { RiEditLine, RiCloseCircleLine } from 'react-icons/ri'
import { MdOutlineKeyboardReturn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useDatabaseRemoveMutation } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

import CardFront from './CardFront'
import CardBack from './CardBack'
import TimeIntervalLabel from './TimeIntervalLabel'
import ModalEditName from './ModalEditName'

const CardContainer = ({ sensorId, data }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const flip =
    isFlipped === true
      ? '[transform:rotateY(180deg)]'
      : '[transform:rotateY(0deg)]'

  const danger = { a: false, b: false, c: false }
  const warnBeat = { a: false, b: true, c: true }
  const warnOxy = { a: true, b: false, c: true }
  const warnTemp = { a: true, b: true, c: false }

  const id = _.toNumber(sensorId)
  const nama = data.nama
  const nilai = Object.values(data.nilai)
  const beat = nilai.map((nilai) => nilai.beat)
  const spo2 = nilai.map((nilai) => nilai.spo2)
  const temp = nilai.map((nilai) => nilai.temp)
  const timestamp = nilai.map((nilai) => nilai.timestamp)

  const dbRef = ref(database, `userId/${id}`)
  const mutation = useDatabaseRemoveMutation(dbRef)

  const range = () => {
    const rangeBeat = _.inRange(_.mean(_.compact(beat)), 60, 100)
    const rangeSpo2 = _.inRange(_.mean(_.compact(spo2)), 95, 100)
    const rangeTemp = _.inRange(_.mean(_.compact(temp)), 36.1, 37.2)
    return { a: rangeBeat, b: rangeSpo2, c: rangeTemp }
  }
  const paramRange = range()

  const colorCode = (object) => {
    let result = ' '
    let message = ' '
    if (_.isEqual(_.mean(beat), 0)) {
      result = 'bg-info text-accent'
      message = `Data ${_.upperCase(
        nama
      )} tidak tersedia di RUANG ${_.upperCase(id)}`
    } else if (_.isEqual(object, danger)) {
      result = 'bg-error'
      message = `Periksa oksimeter dan sensor suhu ${_.upperCase(
        nama
      )} di RUANG ${_.upperCase(id)}`
    } else if (_.isEqual(object, warnOxy)) {
      result = 'bg-warning text-accent'
      message = `Periksa oksimeter ${_.upperCase(nama)} di RUANG ${_.upperCase(
        id
      )}`
    } else if (_.isEqual(object, warnBeat)) {
      result = 'bg-warning text-accent'
      message = `Periksa oksimeter ${_.upperCase(nama)} di RUANG ${_.upperCase(
        id
      )}`
    } else if (_.isEqual(object, warnTemp)) {
      result = 'bg-warning text-accent'
      message = `Periksa sensor suhu ${_.upperCase(
        nama
      )} di RUANG ${_.upperCase(id)}`
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

  const modalCloseHanle = () => {
    setModalOpen(false)
  }

  const deleteCard = (event) => {
    event.stopPropagation()
    mutation.mutate()
  }
  const editCard = (event) => {
    event.stopPropagation()
    setModalOpen(true)
  }

  let navigate = useNavigate()
  const handleCardClick = () => {
    // navigate(`detail/${sensorId}`)
    console.log('clicked')
  }

  return (
    <>
      <div className='card-container'>
        <div className={`card-face-body ${flip}`}>
          <div
            onClick={handleCardClick}
            className={`card-face card-face-front`}>
            <div className={`card-header ${colorCode(paramRange).className}`}>
              <RiEditLine
                onClick={editCard}
                size={20}
                className='card-button'
              />
              <h2 className='text-center text-2xl'>Room {id + 1}</h2>
              <RiCloseCircleLine
                onClick={deleteCard}
                size={20}
                className='card-button hover:bg-error'
              />
            </div>
            <div className='card-content-body'>
              <CardFront beat={beat} temp={temp} spo2={spo2} nama={nama} />
            </div>
            <div className='card-footer'>
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
              <h2 className='text-center text-2xl'>Room {id + 1}</h2>
              <RiCloseCircleLine
                size={20}
                className='card-button hover:bg-error'
              />
            </div>
            <div className='card-content-body'>
              <CardBack beat={beat} temp={temp} spo2={spo2} nama={nama} />
            </div>
            <div className='card-footer'>
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
      <ModalEditName
        id={id}
        modalClose={modalCloseHanle}
        modalOpen={modalOpen}
      />
    </>
  )
}

export default CardContainer
