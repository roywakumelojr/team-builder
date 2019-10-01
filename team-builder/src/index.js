import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Members from "./components/Members";
import MemberForm from "./components/MemberForm";

import data from "./data";
import "../src/App.css";

function App() {
    const [members, setMembers] = useState(data);
    const addNewMember = member => {
        setMembers([...members, member]);
    };
    return (
        <div className="App">
        <h1 className="team-members">Team Members List</h1>
        <MemberForm addNewMember={addNewMember} />
        <Members membersList={members} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));