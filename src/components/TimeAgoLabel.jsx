import TimeAgo from 'react-timeago'

const TimeAgoLabel = ({ date, short = true }) => {
  if (isNaN(date)) {
    return <span>Tidak ada data</span>
  }

  const complement = short ? '' : 'Diperbarui '

  const style = {
    fontWeight: 'light'
  }

  return (
    <span>
      {complement}
      <TimeAgo live date={date} style={style} />
    </span>
  )
}

export default TimeAgoLabel
