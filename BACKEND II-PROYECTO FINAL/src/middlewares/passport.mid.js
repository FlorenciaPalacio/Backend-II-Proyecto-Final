import passport from "passport";

passport.use("register", new LocalStrategy());
passport.use("login", new LocalStrategy());

export default passport;
