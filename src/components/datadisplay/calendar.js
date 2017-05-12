import React from 'react'
import moment from 'moment';
import { Calendar } from 'antd';

export default class myCalendar extends React.Component {
    dateCellRender = (value) => {
        return <div>自定义日数据 {value.date()}</div>
    }

    monthCellRender = (value) => {
        return <div>自定义月数据 {value.month() + 1}</div>
    }

    render() {
        return (
            <Calendar defaultValue={moment()}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}