import { Router } from "express";

// refresh는 남겨두기
import { refresh } from "../utils/refresh";
import { authJWT } from "../middlewares/authJWT";

import { userController } from "../controllers/userController";

const userAuthRouter = Router();

userAuthRouter.post("/user/register", userController.userRegister);

// 모든 회원 정보 가져오기
userAuthRouter.get("/users", userController.findAllUser);

userAuthRouter.post("/user/login", userController.userLogin);

userAuthRouter.get("/users/:id", authJWT, userController.findUserById);

userAuthRouter.put("/user/:id", authJWT, userController.setUserInfo);

userAuthRouter.get("/currentUser", authJWT, userController.getCurrentUser);

userAuthRouter.post("/oauth/google", userController.googleLogin);

userAuthRouter.post("/reset_token", userController.generateResetToken);
//비밀번호 찾기 API
userAuthRouter.post("/user/reset_password", userController.resetPassword);

// refresh는 리팩토링 필요..
userAuthRouter.get("/token/refresh", refresh);

export { userAuthRouter };
