import express from 'express';
const router = express.Router();

router.get('/all' ,(req , res) => {
    res.send('All students');
})
router.post('/create' ,(req , res) => {
    res.send('Sign inn new Students');
})
router.put('/update' ,(req , res) => {
    res.send('Update Students ID');
})
router.delete('/delete' ,(req , res) => {
    res.send('Delete Students ID from DB');
})

export default router;