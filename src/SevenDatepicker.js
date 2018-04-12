/*
* @Author: chengbs
* @Date:   2018-04-12 11:51:43
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-13 00:07:12
*/
import React, { Component } from 'react'
import Calendar from './datepicker/creation'

class SevenDatepicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: []
    }
  }
  selectDate(year, month, day) {
    console.log('选择时间为：' + year + '年' + month + '月' + day + '日')
  }
  previousMonth(year, month) {
    console.log('当前日期为：' + year + '年' + month + '月')
    this.setState({ tags: [7, 11] })
  }
  nextMonth(year, month) {
    console.log('当前日期为：' + year + '年' + month + '月')
    this.setState({ tags: [8, 23] })
  }
  render() {
    const date = new Date()
    return (
      <div>
        <Calendar
          onSelectDate={this.selectDate}
          onPreviousMonth={this.previousMonth}
          onNextMonth={this.nextMonth}
          year={date.getFullYear()}
          month={date.getMonth() + 1}
          day={date.getDate()}
          tags={this.state.tags} />
      </div>
    )
  }
}

export default SevenDatepicker
