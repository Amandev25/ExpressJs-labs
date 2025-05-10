import express from 'express'
import { AllStudents, createStudent, updateStudent, deleteStudent } from '../5_Controllers_In_Depth/Controller/student.js';
const router = express.Router();

router.get('/all' , AllStudents);
router.post('/create' , createStudent);
router.put('/update' , updateStudent);
router.delete('/delete' , deleteStudent );

export default router;
