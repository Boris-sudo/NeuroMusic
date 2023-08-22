import {Body, OperationId, Post, Route} from "tsoa";

export class LoginRequest {
    login: string;
    password: string;
    name: string;
    e_mail: string;
}

export class LoginResponse {
    constructor(
        public login: string,
        public password: string,
        public done : boolean
    ) {}
}

@Route("/login")
export class LoginController {

    @Post()
    @OperationId("doLogin")
    public async auth(@Body() dto: LoginRequest): Promise<LoginResponse> {
        if (dto.login.length < 5 || dto.e_mail.length <= 0 || dto.password.length <= 0 || dto.name.length <= 0)
            return new LoginResponse(`${dto.login}`, `${dto.password}`, true);
        return new LoginResponse(`${dto.login}`, `${dto.password}`, false);
    }
}