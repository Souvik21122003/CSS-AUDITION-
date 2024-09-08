import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false, // Optional field
    },
    performanceType: {
      type: String,
      required: false,
    },
    add_link1: {
      type: String,
      required: false, // Optional field
    },
    add_link2: {
      type: String,
      required: false, // Optional field
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export { Student };
