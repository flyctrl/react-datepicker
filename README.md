## DatePicker
日历组件,兼容PC端和移动端，支持日历的基本操作

## 安装方式
```
npm install / yarn

npm start
```

## 使用方法及配置
```javascript
import React, { Component } from 'react'
import Calendar from './datepicker'

class ShowDatepicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [3, 4, 5, 6]
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
      <Calendar
        onSelectDate={this.selectDate}
        onPreviousMonth={this.previousMonth}
        onNextMonth={this.nextMonth}
        year={date.getFullYear()}
        month={date.getMonth() + 1}
        day={date.getDate()}
        tags={this.state.tags} />
    )
  }
}

export default ShowDatepicker
```
#### 选择日期回调
```javascript
onSelectDate(year, month, day){

}
```
#### 选择上个月回调
```javascript
onPreviousMonth(year, month){

}
```
#### 选择下个月回调
```javascript
onNextMonth(year, month){

}
```
#### 高亮'今天'以及选择日期
```javascript
year/month/day
```
#### tags动态切换
```javascript
tags
```
## 效果
![显示日历](https://github.com/flyctrl/react-datepicker/raw/master/pics/1.jpg)

![文本框操作日历](https://github.com/flyctrl/react-datepicker/raw/master/pics/2.jpg)