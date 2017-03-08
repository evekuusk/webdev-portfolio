import React, { Component } from 'react';

export default class SortByHeightProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'bars_element': <div></div>,
      'sort_type': '',
      'current_order': [],
      'ordered_bars': [],
      'randomized': false,
      'time_elapsed': 0,
      'bubble_time': 0,
      'selection_time': 0,
      'merge_time': 0
    }
  };
  componentDidMount() {
    var orderedBars = []
    var orderedBarsStr = ""
    var counterArr = []
    for (var i = 0; i < 75; i++) {
      counterArr.push(i)
      var height = i / 4
      var heightStyle = {
        height: height + "rem"
      }
      orderedBars.push(<div className="bar" key={i} style={heightStyle}></div>)
      console.log(<div className="bar" key={i} style={heightStyle}></div>)
      orderedBarsStr += <div className="bar" key={i} style={heightStyle}></div>.valueOf()
    }
    var barsDiv = <div className="sort-bars">{orderedBars}</div>
    this.setState({
      'bars_element': barsDiv,
      'current_order': orderedBars,
      'ordered_bars': orderedBars
    })
  };
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  randomizeBars() {
    var currentOrder = this.state.current_order
    var newOrder = this.shuffle(currentOrder)
    var barsDiv = <div className="sort-bars">{newOrder}</div>
    this.setState({
      'bars_element': barsDiv,
      'current_order': newOrder,
      'randomized': true
    })
  };
  bubbleSort() {
    var currentOrder = this.state.current_order
    var ordered
      for (var i = currentOrder.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
          var currentElementHeight = currentOrder[j].props.style.height
          currentElementHeight = currentElementHeight.substring(0, currentElementHeight.length - 3)
          currentElementHeight = parseFloat(currentElementHeight)
          var nextIndex = j - 1
          var nextElementHeight = currentOrder[nextIndex].props.style.height
          nextElementHeight = nextElementHeight.substring(0, nextElementHeight.length - 3)
          nextElementHeight = parseFloat(nextElementHeight)
          if (nextElementHeight > currentElementHeight) {
            var currentOrder = this.state.current_order
            var newOrder = this.state.current_order
            var next = this.state.current_order[nextIndex]
            var current = this.state.current_order[j]
            newOrder[nextIndex] = current
            newOrder[j] = next
            ordered = newOrder
          } else {
            continue;
          }
        }
    }
    this.updateBars(ordered)
  };
  updateBars(array) {
    var barsDiv = <div className="sort-bars">{array}</div>
    this.setState({
      'bars_element': barsDiv,
      'current_order': array,
      'randomized': false
    })
  };
  showSortTimer() {

  };
  render() {
    return (
      <div>
        <h3>Sort By Height</h3>
        <h5>The most fun you've had with an algorithm since...ever!</h5>
        <button onClick={() => this.randomizeBars()}>Randomize</button>
        <div className="timer">{this.state.time_elapsed} milliseconds</div>
        <hr />
        <div className="sort-bars">{this.state.current_order}</div>
        <hr />
        <button className={this.state.randomized === true ? "sort" : "sort disabled"} onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button className={this.state.randomized === true ? "sort" : "sort disabled"}>Selection Sort</button>
        <button className={this.state.randomized === true ? "sort" : "sort disabled"}>Merge Sort</button>
      </div>
    )
  }
}
