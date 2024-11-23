// Leaderboard.js

import React from 'react';

function Leaderboard({ leaderboardData }) {
    return (
        <div>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Exercise</th>
                        <th>Score</th>
                        <th>Diet Plan</th>
                        <th>Goal</th>
                        <th>Steps</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((participant, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{participant.name}</td>
                            <td>{participant.exercise}</td>
                            <td>{participant.score}</td>
                            <td>{participant.diet}</td>
                            <td>{participant.goal}</td>
                            <td>{participant.steps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;