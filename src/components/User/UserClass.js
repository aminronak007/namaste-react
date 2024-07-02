import React, { Component } from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Vadodara",
      },
    };

    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/aminronak007");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // this.timer = setInterval(() => {
    //   console.log("Namaste React");
    // }, 1000);
  }

  componentDidUpdate() {
    // console.log(this.props.name + " Child Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log(this.props.name + " Child Component will Unmount");
  }

  render() {
    const { avatar_url, name, location } = this.state.userInfo;
    // debugger;
    // console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
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
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <img src={avatar_url} alt="avatar" width={100} />
        <h2>Name: {name}</h2>
        <h3>Location: {location ? location : "-"}</h3>
        <h4>Contact: 7778015828</h4>
      </div>
    );
  }
}

export default UserClass;
