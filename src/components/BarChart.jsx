import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip
} from 'recharts'

const GenericBarChart = ({
  data,
  dataKeyX,
  dataKeyY,
  syncId,
  fillColor,
  unit,
  barName,
  labelColor,
  bgcolor
}) => {
  return (
    <ResponsiveContainer width='100%' height='80%'>
      <BarChart syncId={syncId} data={data} margin={{ left: 25, right: 25 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis stroke={fillColor} dataKey={dataKeyX} />
        <YAxis stroke={fillColor} unit={unit} />
        <Tooltip
          labelStyle={{ color: fillColor }}
          contentStyle={{
            background: bgcolor,
            border: 'solid',
            borderColor: 'black',
            borderWidth: '1px',
            borderRadius: '8px'
          }}
        />
        <Legend layout='horizontal' verticalAlign='top' align='center' />
        <Bar
          name={barName}
          unit={unit}
          dataKey={dataKeyY}
          fill={fillColor}
          label={{
            formatter: (str) => str + unit,
            position: 'center',
            fill: labelColor || 'white',
            fontSize: '18px',
            fontWeight: 500
          }}
          isAnimationActive={true}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default GenericBarChart
