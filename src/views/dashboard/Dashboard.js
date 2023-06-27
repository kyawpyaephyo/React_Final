import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router'

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: 'red',
      data: [500, 1200, 800, 1000, 600, 900, 700]
    }
  ]
}

const Dashboard = () => {
  
 
  return( 

   
 
<>

<div>

<CChartBar
  datasets={chartData.datasets}
  labels={chartData.labels}
  options={{
    tooltips: {
      enabled: true
    },
    legend: {
      display: true
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }}
/>

</div>

</> 



  )
}


export default Dashboard
