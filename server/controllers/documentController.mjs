import Document from '../models/Document.mjs';

// Create a new document
export const createDocument = async (req, res) => {
  try {
    const document = new Document(req.body);
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all documents with optional filters
export const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find(req.query);
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a document by ID
export const getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) return res.status(404).json({ message: 'Document not found' });
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing document
export const updateDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!document) return res.status(404).json({ message: 'Document not found' });
    res.json(document);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a document
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) return res.status(404).json({ message: 'Document not found' });
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
