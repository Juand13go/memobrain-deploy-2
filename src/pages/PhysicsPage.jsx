// src/pages/PhysicsPage.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './SciencesPage.css';
import { userContext } from '../App';

function PhysicsPage() {


    const user = useContext(userContext)

    const navigate = useNavigate();

    const handleLevelClick = (level) => {
        navigate(`/physics-level${level}`);
    };

    return (
        <div className="sciences-container">
            <h1 className="sciences-title">Physics Levels</h1>
            <div className="level-buttons">
                {[...Array(2)].map((_, i) => (
                    <button
                        key={i}
                        className="level-button"
                        onClick={user && user.physicslevel >= i ? () => handleLevelClick(i + 1): () =>{alert("Complete the previous levels before reaching this one")}}
                    >
                        Lvl {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PhysicsPage;
