const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("This is the index page."));

module.exports = indexRouter;
