// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only

const englishTranslation = {
    translations: {
        welcome: "Hello <br/> <strong>World</strong>",
        language: "English",
        homeScreen: {
            registerButton: "Register now",
        },
        registerScreen: {
            emailField: {
                name: "Email",
            },
            applyButton: "Register account",
        },
    },
}

export type TranslationType = typeof englishTranslation

export default englishTranslation
