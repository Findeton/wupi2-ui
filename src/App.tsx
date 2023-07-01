// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {styled} from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import {Routes, Route} from "react-router-dom"
import {HomeScreen} from "./screens/HomeScreen"

const StyledApp = styled(Stack)`
    min-height: 100vh;
`

const App = () => {
    return (
        <StyledApp>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </StyledApp>
    )
}

export default App
