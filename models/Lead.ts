import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead ||
  mongoose.model<ILead>("Lead", LeadSchema);
