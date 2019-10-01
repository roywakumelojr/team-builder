import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({ name: "", body: "" });
  const changeHandler = event => {
    console.log(event.target.value);
    setMember ({ ...member, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember ({ name: "", email: "", body: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Type Name Here"
        value={member.name}
        onChange={changeHandler}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Type Email Here"
        value={member.email}
        onChange={changeHandler}
      />

      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        placeholder="Type Role Here"
        value={member.role}
        onChange={changeHandler}
      />

      <button type="submit">Add New Member</button>
    </form>
  );
};

export default MemberForm;
