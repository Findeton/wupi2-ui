// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {ping} from "../services/api"
import React, {useMemo} from "react"

export const LoggedScreen: React.FC = () => {
    const _b = useMemo(async () => {
        let b = await ping()
        return b
    }, [])

    return <p>Hello there!</p>
}
