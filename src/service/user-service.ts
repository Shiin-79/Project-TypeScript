import {CreateUserRequest, toUserResponse, UserResppone} from "../model/user-model";
import {Validation} from "../validation/validation";
import {UserValidation} from "../validation/user-validation";
import {prismaClient} from "../application/database";
import bcrypt from "bcrypt";
import {ResponseError} from "../error/response-error";

export class UserService{
    static async register(request:CreateUserRequest): Promise<UserResppone>{
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);

        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: registerRequest.username
            }
        });

        if(totalUserWithSameUsername != 0) {
            throw new ResponseError(400, "Username already exist");
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        const user = await prismaClient.user.create({
           data: registerRequest
        });

        return toUserResponse(user);
    }
}