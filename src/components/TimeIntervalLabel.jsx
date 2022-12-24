import timeFormatter from '../config/timeFormatter'

const TimeIntervalLabel = ({ start, end, className }) => {
  if (isNaN(start)) {
    return <span>No Data</span>
  }

  return (
    <div className={className}>
      <span>
        {timeFormatter(start, false)} - {timeFormatter(end, false)}
      </span>
    </div>
  )
}

export default TimeIntervalLabel
