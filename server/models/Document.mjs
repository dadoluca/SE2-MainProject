import mongoose from 'mongoose';

const geoJSONSchema = new mongoose.Schema({
  type: { type: String, enum: ['Point', 'Polygon'], required: true },
  coordinates: { type: Array, required: true }
});

const relationshipSchema = new mongoose.Schema({
  documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  type: { type: String, enum: ['direct consequence', 'collateral consequence', 'projection', 'update'], required: true }
});

const resourceSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, required: true }
});

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  stakeholders: { type: [String], required: true },
  scale: String,
  issuance_date: String,
  type: String,
  connections: { type: Number, default: 0 },
  language: String,
  pages: String,
  coordinates: geoJSONSchema,
  areaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
  description: String,
  relationships: [relationshipSchema],
  original_resources: [resourceSchema],
  attachments: [resourceSchema]
});

export default mongoose.model('Document', documentSchema);
