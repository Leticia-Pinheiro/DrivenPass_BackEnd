import {users, cards, credentials, notes, wifis} from "@prisma/client"

export type TypeUser = Omit<users ,'id'>

export type TypeCard = Omit<cards ,'id'>

export type TypeCredential = Omit<credentials ,'id'>

export type TypeNote = Omit<notes ,'id'>

export type TypeWifi = Omit<wifis ,'id'>