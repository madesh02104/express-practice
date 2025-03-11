const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "I am the market leader in AI!",
    user: "ChatGPT",
    added: new Date(),
  },
  {
    text: "MOst devs prefer me over others...",
    user: "Claude",
    added: new Date(),
  },
];

// Home route
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Form route
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { message });
});

module.exports = router;
