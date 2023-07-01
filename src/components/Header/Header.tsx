// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {styled} from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import LanguageMenu from "../LanguageMenu/LanguageMenu"
import PageBanner from "../PageBanner/PageBanner"

const HeaderWrapper = styled(PageBanner)`
    background-color: #f7f9fe;
    padding: 16px 0;
    font-size: 16px;
`

const Header: React.FC = () => (
    <HeaderWrapper>
        <LanguageMenu />
    </HeaderWrapper>
)

export default Header
