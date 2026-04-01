import mongoose from "mongoose";
import dayjs from "dayjs";
const noteSchema = new mongoose.Schema(
  {
    content: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },

  },
  { timestamps: true }
);

noteSchema.pre("save", function (next) {
  this.updatedAt = dayjs();
  next();
});

const prjSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: { type: String, default: "" },
});

const Project = mongoose.model("Project", prjSchema);

const Note = mongoose.model("Note", noteSchema);
export { Project }; // Export the Project model if needed
export default Note;
