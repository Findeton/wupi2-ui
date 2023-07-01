// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import {ThemeProvider} from "@mui/material"
import {theme} from "./services/theme"
import "./services/i18n"
import i18n from "./services/i18n" // needs to be bundled

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
