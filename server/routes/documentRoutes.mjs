import express from 'express';
import { 
  createDocument, 
  getAllDocuments, 
  getDocumentById, 
  updateDocument, 
  deleteDocument 
} from '../controllers/documentController.mjs';

const router = express.Router();


router.post('/', createDocument);                 // Create a new document
router.get('/', getAllDocuments);                 // Get all documents (with optional filters)
router.get('/:id', getDocumentById);              // Get a document by ID
router.put('/:id', updateDocument);               // Update an existing document by ID
router.delete('/:id', deleteDocument);            // Delete a document by ID

export default router;
