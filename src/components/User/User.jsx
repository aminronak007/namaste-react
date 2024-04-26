import React from "react";

const User = (props) => {
  const { name } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Vadodara</h3>
      <h4>Contact: 7778015828</h4>
    </div>
  );
};

export default User;
