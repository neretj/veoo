import logo from './logo.svg';
import {
    UploadVideo
} from './ui-components';
import './App.css';

import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';

function App() {
    return (
        <ThemeProvider theme={updatedTheme}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <UploadVideo />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;

const updatedTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates",
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#b71c1c"
                    },
                },
            },
        },
    },
}, studioTheme)
