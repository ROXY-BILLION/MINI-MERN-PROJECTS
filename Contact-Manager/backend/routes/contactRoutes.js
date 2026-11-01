const express = require("express");

const router = express.Router();

const {
    getContacts,
    createContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");

// GET all contacts
router.get("/", getContacts);

// POST a new contact
router.post("/", createContact);

// PUT update a contact
router.put("/:id", updateContact);

// DELETE a contact
router.delete("/:id", deleteContact);

module.exports = router;