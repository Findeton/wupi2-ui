// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Box, Button, TextField} from "@mui/material"
import React, {useState, PropsWithChildren} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom"
import {styled} from "@mui/material/styles"

const FieldContainer = styled(Box)`
    margin: 8px;
    display: flex;
    gap: 10px;
    align-items: center;
`

const FieldName = styled(Box)`
    min-width: 100px;
`

const InputField: React.FC<PropsWithChildren<{name: string}>> = ({name, children}) => {
    const {t} = useTranslation("translations")

    return (
        <FieldContainer>
            <FieldName>{t(name)}</FieldName>
            {children}
        </FieldContainer>
    )
}

export const RegisterScreen: React.FC = () => {
    const {t} = useTranslation("translations")
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("")
    const [password, setSetPassword] = useState<string>("")

    return (
        <div>
            <InputField name="registerScreen.emailField.name">
                <TextField
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value)
                    }}
                ></TextField>
            </InputField>
            <InputField name="registerScreen.passwordField.name">
                <TextField
                    value={password}
                    type="password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSetPassword(event.target.value)
                    }}
                ></TextField>
            </InputField>
            <Button onClick={() => navigate("/")}>{t("registerScreen.applyButton")}</Button>
        </div>
    )
}
