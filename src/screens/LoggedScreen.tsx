// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {ping} from "../services/api"
import React, {useMemo} from "react"
import {useCookies} from "react-cookie"

export const LoggedScreen: React.FC = () => {
    const [cookies] = useCookies(["auth_token"])

    const _b = useMemo(async () => {
        let b = await ping(cookies.auth_token)
        return b
    }, [cookies.auth_token])

    return <p>Hello there!</p>
}
