const Contact = require("../models/Contact");

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Create a contact
const createContact = async (req, res) => {
    try {
        const { name, email, phone, company } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            company
        });

        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update a contact
const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
};