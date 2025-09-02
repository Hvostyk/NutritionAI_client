import { User } from "@/entities/user/model/types"
import { DietaryTradition } from "@/shared/types/enums"

export type Preferences = {
    id: string
    userId: string
    user: User
    tradition?: DietaryTradition | null
    allergies: string[]
    intolerances: string[]
    dietaryRestrictions: string[]
    dislikedFoods: string[]
    preferredFoods: string[]
}

export type PostPreferences = Omit<Preferences, 'id' | 'userId' | 'user'>