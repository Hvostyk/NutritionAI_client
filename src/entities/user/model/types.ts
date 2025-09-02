import { BodyMetrics } from "@/entities/bodyMetrics/model/types"
import { Preferences } from "@/entities/preferences/model/types"
import { ActivityLvl } from "@/shared/types/enums"

export type User = {
    id: string
    email: string
    fullname: string
    avatarUrl?: string | null
    dateOfBirth?: Date | null
    createdAt: Date
    updatedAt: Date
    bio?: string | null
    activityLvl?: ActivityLvl | null
    sportType?: string | null
    location?: string | null
    bodyMetrics: BodyMetrics[]
    preferences?: Preferences[] | null
}

export type UpdateUserRequest = {
    email?: string;
    fullname?: string;
    dateOfBirth?: Date | null;
    bio?: string | null;
    avatar?: File;
};


export type UserProfile = Omit<User, 'password'>