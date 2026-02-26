import mongoose, { Schema, model, models } from "mongoose";

const VALID_SERVICES = [
<<<<<<< HEAD
  "ai-content",
  "automation",
  "saas",
  "websites",
=======
  "branding",
  "web-mobile",
  "ai-marketing",
  "content-studio",
  "business-automation",
>>>>>>> 012d777 (updated to v1)
  "multiple",
  "other",
] as const;

const VALID_STATUSES = ["new", "read", "replied"] as const;

export type ContactStatus = (typeof VALID_STATUSES)[number];
export type ContactService = (typeof VALID_SERVICES)[number];

export interface IContact {
  name: string;
  email: string;
  company?: string;
<<<<<<< HEAD
=======
  phone?: string;
  industry?: string;
>>>>>>> 012d777 (updated to v1)
  service: ContactService;
  message: string;
  status: ContactStatus;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true },
    company: { type: String, default: "" },
<<<<<<< HEAD
=======
    phone: { type: String, default: "" },
    industry: { type: String, default: "" },
>>>>>>> 012d777 (updated to v1)
    service: {
      type: String,
      required: true,
      enum: VALID_SERVICES,
    },
    message: { type: String, required: true, minlength: 10 },
    status: {
      type: String,
      enum: VALID_STATUSES,
      default: "new",
    },
  },
  { timestamps: true }
);

export const Contact =
  models.Contact ?? model<IContact>("Contact", contactSchema);
