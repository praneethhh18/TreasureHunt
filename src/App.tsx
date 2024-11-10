import React from 'react';
import { ImagePuzzle } from './components/ImagePuzzle';
import { TreasureMap } from './components/TreasureMap';
import { Timer } from './components/Timer';
import { useState } from 'react';

function App() {
  const [phase, setPhase] = useState<'puzzle' | 'map'>('puzzle');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const handlePuzzleComplete = () => {
    setPhase('map');
  };

  const handleGameComplete = () => {
    setGameComplete(true);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">Treasure Hunt Challenge</h1>
          <p className="text-xl text-gray-600 mb-8">Are you ready to begin the adventure?</p>
          <button
            onClick={startGame}
            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            Start Adventure
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {gameStarted && <Timer onComplete={handleGameComplete} />}
      
      {phase === 'puzzle' ? (
        <ImagePuzzle onComplete={handlePuzzleComplete} />
      ) : (
        <TreasureMap onComplete={handleGameComplete} />
      )}
    </div>
  );
}

export default App;