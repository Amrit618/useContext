import React from 'react';
import { useTheme } from './ThemeContext';

const FunComp = () => {

    const { darkTheme,toggleTheme } = useTheme()

    const testStyle = {
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div>
            <button onClick={toggleTheme}> button</button>
            <div style={testStyle} >

                hello
</div>
        </div>
    );
}

export default FunComp;