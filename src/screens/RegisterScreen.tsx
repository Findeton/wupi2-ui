// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Button, TextField} from "@mui/material"
import React, {useState} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom"

export const RegisterScreen: React.FC = () => {
    const {t} = useTranslation("translations")
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("")

    return (
        <div>
            <p>
                {t("registerScreen.emailField.name")}
                <TextField
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value)
                    }}
                ></TextField>
            </p>
            <Button onClick={() => navigate("/")}>{t("registerScreen.applyButton")}</Button>
        </div>
    )
}
