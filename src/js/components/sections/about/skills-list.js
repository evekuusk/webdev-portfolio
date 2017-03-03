import React, { Component } from 'react';

export default class SkillsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': []
    }
  };
  componentDidMount() {
    var dataArr = Object.entries(this.props.data)
    this.setState({
      'data': dataArr
    })
  };
  render() {
    const list = this.state.data.map(function(item, index) {
      var skill = item[0]
      var skillList = []
      for (var i = 0; i < item[1].length; i++) {
        skillList.push(<li key={i}>{item[1][i]}</li>)
      }

      return (
        <div className="list-item" key={index}>
          <h4>{skill}</h4>
          <ul>{skillList}</ul>
        </div>
      )
    })
    return (
      <div className="subsection skills-list">
        {list}
      </div>
    )
  };
};
