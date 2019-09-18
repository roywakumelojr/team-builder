import React from "react";

const Members = props => {
  console.log(props);
  return (
    <div className="member-list">
      {props.membersList.map(member => {
        return (
          <div className="member" key={member.id}>
            <hr></hr>
            <h2>{member.name}</h2>
            <hr></hr>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <span className="member-edit">
              <p>Update</p>
            </span>
            <span className="delete-member">
              <p>Delete</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Members;
