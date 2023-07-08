// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {Box} from "@mui/material"
import React, {PropsWithChildren} from "react"
import {useTranslation} from "react-i18next"
import {styled} from "@mui/material/styles"

const FieldBox = styled(Box)`
    margin: 8px;
    display: flex;
    gap: 10px;
    align-items: center;
`

const FieldName = styled(Box)`
    min-width: 100px;
`

export const FieldContainer: React.FC<PropsWithChildren<{name: string}>> = ({name, children}) => {
    const {t} = useTranslation("translations")

    return (
        <FieldBox>
            <FieldName>{t(name)}</FieldName>
            {children}
        </FieldBox>
    )
}
