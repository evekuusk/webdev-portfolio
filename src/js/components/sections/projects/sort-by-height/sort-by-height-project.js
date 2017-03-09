import React, { Component } from 'react';
var timer
var milliseconds = 0

export default class SortByHeightProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'bars_element': <div></div>,
      'num_items': 200,
      'division': 15,
      'sort_type': '',
      'current_order': [],
      'ordered_bars': [],
      'randomized': false,
      'timer_start': null,
      'timer_end': null,
      'milliseconds': 0,
      'bubble_time': 0,
      'selection_time': 0
    }
  };
  componentDidMount() {
    var orderedBars = []
    var orderedBarsStr = ""
    var counterArr = []
    for (var i = 0; i < this.state.num_items; i++) {
      counterArr.push(i)
      var height = i / this.state.division
      var heightStyle = {
        height: height + "rem"
      }
      orderedBars.push(<div className="bar" key={i} style={heightStyle}></div>)
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
      'randomized': true,
      'milliseconds': 0
    })
  };
  bubbleSort() {
    var start = new Date().getTime()
    this.setState({
      'timer_start': start
    })
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
    var end = new Date().getTime()
    var elapsed = end - start
    this.setState({
      'timer_end': end,
      'milliseconds': elapsed,
      'bubble_time': elapsed
    })
  };
  selectionSort() {
    var start = new Date().getTime()
    this.setState({
      'timer_start': start
    })
    var currentOrder = this.state.current_order
    var ordered
    var temp
    for (var i = 0; i < currentOrder.length; i++) {
      var newOrder = this.state.current_order
      var smallestValIndex = i
      for (var j = i + 1; j < currentOrder.length; j++) {
        var currentElementHeight = currentOrder[smallestValIndex].props.style.height
        currentElementHeight = currentElementHeight.substring(0, currentElementHeight.length - 3)
        currentElementHeight = parseFloat(currentElementHeight)
        var nextElementHeight = currentOrder[j].props.style.height
        nextElementHeight = nextElementHeight.substring(0, nextElementHeight.length - 3)
        nextElementHeight = parseFloat(nextElementHeight)
        if (nextElementHeight < currentElementHeight) {
          smallestValIndex = j
        }
      }
      temp = newOrder[i]
      newOrder[i] = newOrder[smallestValIndex]
      newOrder[smallestValIndex] = temp
      ordered = newOrder
    }
    this.updateBars(ordered)
    var end = new Date().getTime()
    var elapsed = end - start
    this.setState({
      'timer_end': end,
      'milliseconds': elapsed,
      'selection_time': elapsed
    })
  };
  sortingRace() {
    this.bubbleSort()
    this.selectionSort()
  }
  updateBars(array) {
    var barsDiv = <div className="sort-bars">{array}</div>
    this.setState({
      'bars_element': barsDiv,
      'current_order': array,
      'randomized': false
    })
  };
  render() {
    return (
      <div>
        <h3>Sort By Height</h3>
        <h5>The most fun you've had with an algorithm since '99!</h5>
        <hr />
        <div className="sort-bars">{this.state.current_order}</div>
        <hr />
        <button onClick={() => this.randomizeBars()}>Randomize</button>
        <button className={this.state.randomized === true ? "sort" : "sort disabled"} onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button className={this.state.randomized === true ? "sort" : "sort disabled"} onClick={() => this.selectionSort()}>Selection Sort</button>
        <h5>Bubble Sort Time Elapsed: {this.state.bubble_time} milliseconds</h5>
        <h5>Selection Sort Time Elapsed: {this.state.selection_time} milliseconds</h5>
      </div>
    )
  }
}
