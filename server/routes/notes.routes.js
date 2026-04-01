import { Router } from "express";
import {
  createNote,
  editNote,
  deleteNoteById,
  getNotesById,
} from "../controllers/note.controllers.js";

const notesRouter = Router();

notesRouter.get("/projects/:id/notes/:userId", getNotesById);
notesRouter.put("/projects/notes/:id", editNote);
notesRouter.post("/projects/notes/create/", createNote);
notesRouter.delete("/projects/notes/:id", deleteNoteById);
notesRouter.post(' /projects/create' , createProject )
notesRouter.post(' /projects/create' , deleteProject )

export default notesRouter;
