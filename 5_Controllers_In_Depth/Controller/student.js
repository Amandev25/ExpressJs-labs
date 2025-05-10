import express from 'express';
//const router =express.Router();

const AllStudents =(req,res) => res.send('All Students');
const createStudent = (req,res) => res.send('All new user');
const updateStudent = (req,res) => res.send('Update user');
const deleteStudent = (req,res) => res.send('Delete User');

export {AllStudents, createStudent, updateStudent, deleteStudent};