// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Button, TextField} from "@mui/material"
import React, {useState} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom"
import {FieldContainer} from "../components/FieldContainer/FieldContainer"
import {loginUser} from "../services/api"
import {useCookies} from "react-cookie"

export const LoginScreen: React.FC = () => {
    const {t} = useTranslation("translations")
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("")
    const [password, setSetPassword] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const [cookies, setCookie] = useCookies(["auth_token"])

    const onLogin = () => {
        loginUser(email, password)
            .then((authToken) => {
                setCookie("auth_token", authToken)
                navigate("/app")
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            })
    }

    return (
        <div>
            <FieldContainer name="loginScreen.emailField.name">
                <TextField
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value)
                    }}
                ></TextField>
            </FieldContainer>
            <FieldContainer name="loginScreen.passwordField.name">
                <TextField
                    value={password}
                    type="password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSetPassword(event.target.value)
                    }}
                ></TextField>
            </FieldContainer>
            <Button onClick={onLogin}>{t("loginScreen.applyButton")}</Button>
            {error && <p>{t("loginScreen.errors.failedLogin")}</p>}
        </div>
    )
}
