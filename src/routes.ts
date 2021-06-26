import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AutenticateUsersController } from "./controllers/AutenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autenticateUsersController = new AutenticateUsersController();
const createComplimentController = new CreateComplimentController();

router.post("/users",createUserController.handle);
//add entre a tag e o controoler (middle)
router.post("/tags",ensureAdmin,createTagController.handle);

router.post("/login",autenticateUsersController.handle);

router.post("/compliments",createComplimentController.handle);

export{router}
