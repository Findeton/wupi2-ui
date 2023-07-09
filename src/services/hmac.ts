// SPDX-FileCopyrightText: 2022 Félix Robles <felix@wupi.io>
//
// SPDX-License-Identifier: AGPL-3.0-only

interface Khmac {
    hmac: string
    user_id: string
    timestamp: number
    timeout_ms: number
}

// Format: khmac:///sha-256;<hmac>/<user_id>:<timestamp>:<timeout_ms>

export const readKhmac = (input: string): Khmac | null => {
    const regex = /khmac:\/\/\/sha-256;(.+)\/(.+):(\d+):(\d+)$/
    const match = input.match(regex)

    if (!match) {
        return null
    }
    const [_, hmac, userId, timestamp, timeoutMs] = match

    return {
        hmac,
        user_id: userId,
        timestamp: Number(timestamp),
        timeout_ms: Number(timeoutMs),
    }
}
