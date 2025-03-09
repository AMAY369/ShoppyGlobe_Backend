import { loginUser, registerUser } from "../controllers/users.controller.js";

export const userRoutes = (app) => {

    // creting a new user 
    app.post("/api/register", registerUser);

    // user login 
    app.post("/api/login", loginUser)
}