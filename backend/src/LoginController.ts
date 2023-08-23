import {
    Body,
    OperationId,
    Post,
    Route,
    Tags,
    Controller
} from "tsoa";
import { User, UserPost } from "./_modules/UserModel";

export class LoginResponse {
    constructor(
        public username: string,
        public email: string,
        public done : boolean
    ) {}
}

@Route("/login")
export class LoginController extends Controller {

    constructor() {
        super();
    }
    check_valid_date(user: UserPost) {
        let result: boolean = true;
        // TODO
        return result;
    }

    @Post()
    @OperationId("doLogin")
    @Tags("BackendApi")
    public async auth(
        @Body() dto: UserPost
    ): Promise<LoginResponse>
    {
        console.log('login in backend')
        if (this.check_valid_date(dto))
            return new LoginResponse(
                `${dto.username}`,
                `${dto.password}`,
                true
            );

        return new LoginResponse(
            `${dto.username}`,
            `${dto.password}`,
            false
        );
    }
}