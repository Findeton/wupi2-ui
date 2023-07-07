// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Button} from "@mui/material"
import React from "react"
import {Trans, useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom"

export const HomeScreen: React.FC = () => {
    const {t} = useTranslation("translations")
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <Trans t={t} i18nKey="welcome" />
            </div>
            <Button onClick={() => navigate("/register")}>{t("homeScreen.registerButton")}</Button>
        </div>
    )
}
