// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only

export const registerUser = async (email: string, password: string) =>
    fetch("/users", {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })

export const loginUser = async (email: string, password: string): Promise<string> => {
    const response = await fetch("/users/authenticate", {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    let authData = (await response.json()) as {auth_token: string}

    return authData.auth_token
}

export const ping = async () => fetch("/ping")
