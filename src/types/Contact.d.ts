type Email = `${string}@${string}.${string}`

export interface Contact {
    email: Email,
    message: string
}