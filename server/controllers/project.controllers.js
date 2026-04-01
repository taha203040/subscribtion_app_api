import { Project } from "../models/notes.model";



export const createProject =async (req , res) => {
    try {
        const {nameProject , description } = req.body;
        if (!nameProject || !description) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        const project = new Project
         ({
            title :nameProject,
            description: description,
        })
        await project.save();
        res.status(201).json({ msg: "Project created successfully", project });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal server error" }); 
    }
}