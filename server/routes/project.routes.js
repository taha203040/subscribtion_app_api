import express, { Router } from 'express'
import { createProject } from '../controllers/project.controllers'





const projectRouter = Router()

projectRouter.post('/projects/create/' , createProject)
projectRouter.get('/project/' , getProject)



export  default projectRouter 