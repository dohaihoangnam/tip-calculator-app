import React from "react";
import { ReactDOM } from "react";
import './styles.css';
import { Logo } from './Logo';
import { Form } from './Form';
import { Result } from './Result';

function App() {
    return 
    (
        <>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Frontend Mentor | Tip Calculator App</title>
                <link rel="stylesheet" href="./styles.css"/>
            </head>
            <body>
                <header>
                    <Logo/>
                </header>
                <main>
                    <Form/>
                    <Result/>
                </main>
                <footer>
                    <div className="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                        Coded by <a href="#">Your Name Here</a>.
                    </div>
                </footer>
            </body>
        </>
    )
}

ReactDOM.render(App);