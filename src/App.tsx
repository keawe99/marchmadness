import React from 'react';
import logo from './logo.svg';
import data from './CollegeBasketballTeams.json';
import './App.css';

function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <header>
        Here we will be able to explore some of March's most exhilarating
        matchups that fuel the madness
      </header>
    </div>
  );
}

const MarchMadness: React.FC = () => {
  // Access the data from the JSON file
  const teams = data.teams;

  return (
    <div>
      <div className="header-container">
        <h1 className="header">School Name</h1>
        <h1 className="header middle">Mascot</h1>
        <h1 className="header right">Location</h1>
      </div>
      <ul className="team-list">
        {/* Render each team */}
        {teams.map((team: any) => (
          <li key={team.id} className="team-item">
            <div className="team-name">{team.school}</div>
            <div className="team-mascot">{team.name}</div>
            <div className="team-location">
              {team.city}, {team.state}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <Welcome />
      </div>
      <div>
        <MarchMadness />
      </div>
    </>
  );
}

export default App;
