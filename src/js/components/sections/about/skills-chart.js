import React, { Component } from 'react';

export default class SkillsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': [],
      'colours': [
        '#bdbdbd'
      ]
    }
  };
  componentDidMount() {
    var dataArr = Object.entries(this.props.data)
    this.setState({
      'data': dataArr
    })
  }
  render() {
    const rows = this.state.data.map(function(item, index) {
      return (
        <div className="chart-row" key={index}>
          <div className="label"><p>{item[0]}</p></div>
          <div className="bar-layout">
            <div className={item[1][1] >= 1 ? 'bar-box filled' : 'bar-box'}></div>
            <div className={item[1][1] >= 2 ? 'bar-box filled' : 'bar-box'}></div>
            <div className={item[1][1] >= 3 ? 'bar-box filled' : 'bar-box'}></div>
            <div className={item[1][1] >= 4 ? 'bar-box filled' : 'bar-box'}></div>
            <div className={item[1][1] >= 5 ? 'bar-box filled' : 'bar-box'}></div>
          </div>
          <div className="label"><p>{item[1][0]}</p></div>
        </div>
      )
    })
    return (
      <div className="subsection skills-chart">
        <h4 className="chart-header">{this.props.header}</h4>
          <div className="chart-wrapper">
            {rows}
          </div>
      </div>
    )
  }
}
