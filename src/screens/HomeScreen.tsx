// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import React from "react"
import {Trans, useTranslation} from "react-i18next"

export const HomeScreen: React.FC = () => {
    const {t} = useTranslation("translations")

    return (
        <div>
            <Trans t={t} i18nKey="welcome" />
        </div>
    )
}
