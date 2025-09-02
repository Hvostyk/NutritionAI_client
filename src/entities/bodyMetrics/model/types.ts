import { User } from "@/entities/user/model/types"

export type BodyMetrics = {
    id: string
    user: User
    date: Date
    weight?: number | null
    height?: number | null
    bodyFat?: number | null
    muscleMass?: number | null
}

export type PostBodyMetrics = Omit<BodyMetrics , 'id' | 'user'| 'date'>

