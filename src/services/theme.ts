// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {ThemeOptions, createTheme} from "@mui/material"
import {Theme as MUITheme} from "@mui/material"

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
// See: https://github.com/emotion-js/emotion/discussions/2291#discussioncomment-491185
declare module "@emotion/react" {
    export interface Theme extends MUITheme {}
}

export const themeOptions: ThemeOptions = {}

export const theme = createTheme(themeOptions)
