// App.js

import React, {
  useState
} from 'react';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [participants, setParticipants] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [goal, setGoal] = useState('');
  const [steps, setSteps] = useState(0);

  const addParticipant = (name, score) => {
      const newParticipant = {
          name: name,
          score: score,
          exercise: exerciseName,
          diet: dietPlan, // Adding diet plan to participant
          goal: goal, // Adding goal to participant
          steps: steps // Adding steps to participant
      };
      setParticipants([...participants, newParticipant]);
  };

  const updateLeaderboard = () => {
      const sortedParticipants = [...participants].sort(
          (a, b) => b.score - a.score);
      setLeaderboardData(sortedParticipants);
  };

  return (
      <div className="App">
          <div className="container">
              <h1 className="title">
                  Fitness Challenge Tracker
              </h1>
              <div className="exercise-container">
                  <label className="exercise-label">
                      Select Exercise:
                  </label>
                  <select
                      value={exerciseName}
                      onChange={
                          (e) => setExerciseName(e.target.value)}
                      className="exercise-select"
                  >
                      <option value="">Select Exercise</option>
                      <option value="Pushup">Pushup</option>
                      <option value="Situp">Situp</option>
                      <option value="Rope">Rope</option>
                      <option value="Squat">Squat</option>
                      <option value="Deadlift">Deadlift</option>
                  </select>
              </div>
              <div className="diet-container">
                  <label className="diet-label">
                      Enter Customized Diet Plan:
                  </label>
                  <input
                      type="text"
                      placeholder="Diet Plan"
                      value={dietPlan}
                      onChange={
                          (e) => setDietPlan(e.target.value)}
                      className="diet-input"
                  />
              </div>
              <div className="goal-container">
                  <label className="goal-label">
                      Set Your Goal:
                  </label>
                  <input
                      type="text"
                      placeholder="Goal"
                      value={goal}
                      onChange={
                          (e) => setGoal(e.target.value)}
                      className="goal-input"
                  />
              </div>
              <div className="steps-container">
                  <label className="steps-label">
                      Track Number of Steps:
                  </label>
                  <input
                      type="number"
                      placeholder="Steps"
                      value={steps}
                      onChange={
                          (e) => setSteps(e.target.value)}
                      className="steps-input"
                  />
              </div>
              <ParticipantForm addParticipant={addParticipant}
                  updateLeaderboard={updateLeaderboard} />
              <Leaderboard leaderboardData={leaderboardData} />
          </div>
      </div>
  );
}

function ParticipantForm({ addParticipant,
  updateLeaderboard }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
      e.preventDefault();
      addParticipant(name, score);
      updateLeaderboard();
      setName('');
      setScore(0);
  };

  return (
      <form onSubmit={handleSubmit} className="participant-form">
          <input type="text" placeholder="Participant Name"
              value={name} onChange={
                  (e) => setName(e.target.value)} required />
          <input type="number" placeholder="Score"
              value={score} onChange={
                  (e) => setScore(e.target.value)} required />
          <button type="submit">
              Add Participant
          </button>
      </form>
  );
}

export default App;