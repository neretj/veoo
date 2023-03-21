import { Amplify } from 'aws-amplify';
import {
    UploadVideo
} from './ui-components';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';

function App() {
    return (
        <ThemeProvider theme={updatedTheme}>
            <div className="App">
                <header className="App-header">
                    <Authenticator>
                        {({ signOut, user }) => (
                            <main>
                                <h1>Hello {user.username}</h1>
                                <button onClick={signOut}>Sign out</button>
                            </main>
                        )}
                    </Authenticator>
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
