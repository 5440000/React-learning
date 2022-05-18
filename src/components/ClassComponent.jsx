import { Component } from "react";

export class ClassComponent extends Component {
  state = {
    count: 0,
  };

  shouldComponentUpdate(pervProps, prevState) {
    return (
      pervProps.title !== this.props.title ||
      prevState.count !== this.state.count
    );
  }

  componentDidUpdate() {
    console.log("🚀 ~ class: componentDidUpdate");
  }

  componentDidMount() {
    console.log("🚀 ~ class: componentDidMount");
  }

  componentWillUnmount() {
    console.log("🚀 ~ class: componentWillUnmount");
  }

  clickHandler() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("🚀 ~ class: render");
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>+</button>
      </div>
    );
  }
}
