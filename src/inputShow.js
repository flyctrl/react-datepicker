/*
* @Author: chengbs
* @Date:   2018-04-12 10:24:50
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-25 15:30:00
*/
import React, { Component } from 'react'
import Calendar from './datepicker'

class InputShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      isShow: false,
      isCalendar: true,
      value: ''
    }
    this.mounted = true
  }
  componentDidMount() {
    this.mounted = true
    window.addEventListener('click', () => {
      if (this.mounted) {
        this.setState({
          isShow: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.mounted = false
  }
  selectDate(year, month, day) {
    console.log('选择时间为：' + year + '年' + month + '月' + day + '日')
    this.setState({
      value: `${year}-${month}-${day}`,
      isShow: false
    })
  }
  previousMonth(year, month) {
    console.log('当前日期为：' + year + '年' + month + '月')
    this.setState({ tags: [7, 11] })
  }
  nextMonth(year, month) {
    console.log('当前日期为：' + year + '年' + month + '月')
    this.setState({ tags: [8, 23] })
  }
  handleFocus() {
    this.setState({
      isShow: true
    })
  }
  stopPropagation(e) {
    e.stopPropagation()
  }
  render() {
    const date = new Date()
    return (
      <div style={{ position: 'relative' }}>
        <input onClick={this.stopPropagation.bind(this)} onFocus={this.handleFocus.bind(this)} value={this.state.value} type='text' />
        <div onClick={this.stopPropagation.bind(this)} style={{ position: 'absolute', top: 22, left: 0, border: '1px solid #ccc', display: this.state.isShow ? 'block' : 'none' }}>
          <Calendar
            onSelectDate={this.selectDate.bind(this)}
            onPreviousMonth={this.previousMonth}
            onNextMonth={this.nextMonth}
            year={date.getFullYear()}
            month={date.getMonth() + 1}
            day={date.getDate()}
            tags={this.state.tags} />
        </div>
      </div>
    )
  }
}

export default InputShow
