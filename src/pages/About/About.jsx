import React, { Component } from "react";
import User from "../../components/User/User";
import UserClass from "../../components/User/UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    console.log("Parent Contructor");
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  // componentDidUpdate() {
  //   console.log("Parent Component Did Update");
  // }

  // componentWillUnmount() {
  //   console.log("Parent Component will Unmount");
  // }

  render() {
    console.log("Parent Render");
    const { name } = this.state;
    return (
      <div>
        <h1>About</h1>
        {/* <h2>Count : {count}</h2>
        <button
          onClick={() => {
            // Never update state variables directly.
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <User name={name} /> */}
        <UserClass name={name} />
        {/* <UserClass name="Second User" />
        <UserClass name="Third User" /> */}
      </div>
    );
  }
}

// const About = () => {
//   let name = "Ronak";
//   return (
//     <div>
//       <h1>About</h1>
//       <User name={name} />

//       <UserClass name={name} />
//     </div>
//   );
// };

export default About;
