import React, { useState } from 'react';
import './App.css';
import FileExporler from './apps/file-exporler/file-exporler';
import Shortcut from './components/desktop/shortcut';
import StartBar from './components/startbar';
import TaskBar from './components/taskbar';

function App() {
  const [startBarHeight, setStartBarHeight] = useState(0)
  function toggleStartBar() {
    if (startBarHeight === 0) {
      setStartBarHeight(500)
    } else {
      setStartBarHeight(0)
    }
  }
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{backgroundImage: 'url(https://static.zerochan.net/Eula.full.3343803.jpg)'}}>
      <div className="flex-grow">
        <div className="p-4">
        <Shortcut />
        </div>
        <FileExporler />
      </div>
      <StartBar startBarHeight={startBarHeight}/>
      <TaskBar toggleStartBar={toggleStartBar}/>
    </div>
  );
}

export default App;
