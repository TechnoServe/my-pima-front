import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'
import './dashboard.css'

const data = [
  { name: 'Training Groups', value: 120 },
  { name: 'Participants', value: 200 },
  { name: 'Buisness Advisor', value: 350 },
  { name: 'Farmer Trainer', value: 280 }
]

const COLORS = ['rgba(37, 36, 93, 1)', 'rgba(0, 165, 163, 1)', 'rgba(186, 237, 189, 1)', 'rgba(255, 168, 0, 1)'] // Custom colors for the segments

const Piechart = () => {
  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0)
  const calculatedData = data.map((entry) => ({
    ...entry,
    percentage: ((entry.value / totalValue) * 100).toFixed(2)
  }))

  const RenderLegend = ({ payload }) => {
    return (
      <ul className='custom-legend'>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className='legend-item'>
            <span className='legend-icon' style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
            <span className='legend-text'>
              {entry.payload.name} ({entry.payload.percentage}%)
            </span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className='chart__content-container'>
      <p style={{ fontWeight: '600', color: 'rgba(0, 165, 163, 1)' }}>Total Metrics Values</p>
      <ResponsiveContainer width='100%' height={200}>
        <PieChart>
          <Pie
            data={calculatedData}
            dataKey='value'
            outerRadius={80}
            innerRadius={40} // Creates a donut effect
            paddingAngle={2} // Adds some space between segments
            fill='#8884d8'
          >
            {calculatedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align='right' verticalAlign='middle' layout='vertical' iconType='circle' content={<RenderLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Piechart
