import React from 'react';
import logo from './logo.svg';
import './App.css';
import SoundButton from './SoundButton';

function App() {
    return (
        <div className="h-screen p-6 bg-gradient-to-t from-blue-900 to-blue-600 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
            <SoundButton></SoundButton>
        </div>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
