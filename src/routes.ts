import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AutenticateUsersController } from "./controllers/AutenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAutenticated } from "./middlewares/ensureAutenticated";
import { ensureTag } from "./middlewares/ensureTag";
import { ListComplimentsSenderController } from "./controllers/ListComplimentsSenderController";
import { ListComplimentsReceiverController } from "./controllers/ListComplimentsReceiverController";
import { ListTagsContoller } from "./controllers/ListTagsController";
import { ListUsersContoller } from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autenticateUsersController = new AutenticateUsersController();
const createComplimentController = new CreateComplimentController();
const listComplimentReceiverController = new ListComplimentsReceiverController();
const listComplimentSenderController = new ListComplimentsSenderController();
const listTagController = new ListTagsContoller();
const listUsersController = new ListUsersContoller();

router.post("/users",createUserController.handle);
//add entre a tag e o controoler (middle)
router.post("/tags",
ensureAutenticated,
ensureAdmin,
createTagController.handle);

router.post("/login",autenticateUsersController.handle);

router.post("/compliments",
ensureAutenticated,
ensureTag,
createComplimentController.handle);

router.get("/user/compliments/send",
ensureAutenticated,
listComplimentSenderController.handle);

router.get("/user/compliments/receiver",
ensureAutenticated,
listComplimentReceiverController.handle)

router.get("/tags/",
ensureAutenticated,
listTagController.handle)

router.get("/users/",
ensureAutenticated,
listUsersController.handle)

export{router}
