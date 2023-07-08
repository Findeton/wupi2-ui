// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {styled} from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import {Routes, Route} from "react-router-dom"
import {HomeScreen} from "./screens/HomeScreen"
import PageBanner from "./components/PageBanner/PageBanner"
import Header from "./components/Header/Header"
import {RegisterScreen} from "./screens/RegisterScreen"
import {LoginScreen} from "./screens/LoginScreen"
import {LoggedScreen} from "./screens/LoggedScreen"

const StyledApp = styled(Stack)`
    min-height: 100vh;
`

const App = () => {
    return (
        <StyledApp>
            <Header />
            <PageBanner marginBottom="auto">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/logged" element={<LoggedScreen />} />
                </Routes>
            </PageBanner>
        </StyledApp>
    )
}

export default App
