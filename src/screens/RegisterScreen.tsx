// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Button, TextField} from "@mui/material"
import React, {useState} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom"
import {registerUser} from "../services/api"
import {FieldContainer} from "../components/FieldContainer/FieldContainer"

export const RegisterScreen: React.FC = () => {
    const {t} = useTranslation("translations")
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("")
    const [password, setSetPassword] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onRegister = () => {
        registerUser(email, password)
            .then((response) => {
                if (response.ok) {
                    navigate("/login")
                } else {
                    console.log(response)
                    setError(true)
                }
            })
            .catch()
    }

    return (
        <div>
            <FieldContainer name="registerScreen.emailField.name">
                <TextField
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value)
                    }}
                ></TextField>
            </FieldContainer>
            <FieldContainer name="registerScreen.passwordField.name">
                <TextField
                    value={password}
                    type="password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSetPassword(event.target.value)
                    }}
                ></TextField>
            </FieldContainer>
            <Button onClick={onRegister}>{t("registerScreen.applyButton")}</Button>
            {error && <p>{t("registerScreen.errors.failedRegistration")}</p>}
        </div>
    )
}
