import React from 'react'
import { Bounce, SlideRight } from 'animate-components'

const statusOptions = {
  ONLINE: {
    text_enUS: 'ONLINE',
    text_kr: '온라인',
    color: 'onlineGreen',
    icon: <img id='statusOnlineSVG' src='../static/svg/status_online.svg' />
  },
  OFFLINE: {
    text_enUS: 'OFFLINE',
    text_kr: '오프라인',
    color: 'offlineRed',
    icon: <img id='statusOfflineSVG' src='../static/svg/status_offline.svg' />
  },
  SCANNING: {
    text_enUS: 'SCANNING',
    text_kr: '스캐닝',
    color: 'scanningBlue',
    icon: <img id='statusScanningSVG' className='appStatusIconSpinning' src='../static/svg/status_scanning.svg' />
  },
  ERROR: {
    text_enUS: 'ERROR',
    text_kr: '오류',
    color: 'errorYellow',
    icon: <img id='statusErrorSVG' src='../static/svg/status_error.svg' />
  }
}

// Current server status output
var currentStatus = statusOptions.ONLINE

// Default to US lang
var outputStatusText = currentStatus.text_enUS

export default class AppStatus extends React.Component {
  render () {
    return (
      <section className='appStatus'>
        <div className='appStatusHeader'>
          <SlideRight as='h1' duration='1s'>Status: <span className={currentStatus.color}>{outputStatusText}</span></SlideRight>
        </div>
        <Bounce duration='1.5s' className='appStatusIcon'>
          {currentStatus.icon}
        </Bounce>
      </section>
    )
  }
}
