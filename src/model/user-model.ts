import {User} from "@prisma/client";
import {Address} from "@prisma/client";
import {Contact} from "@prisma/client";

export type UserResppone = {
    username : string;
    name : string;
    token?: string;
}

export type CreateUserRequest = {
    username : string;
    name : string;
    password : string;
}

export function toUserResponse(user: User): UserResppone{
    return {
        username: user.username,
        name: user.name,
    }
}