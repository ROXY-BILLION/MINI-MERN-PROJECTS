const express = require("express");
const router = express.Router();

const {
    getBooks,
    addBook
} = require("../controllers/bookController");

router.get("/", getBooks);
router.post("/", addBook);

module.exports = router;