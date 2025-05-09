import express from 'express';
const router1 = express.Router();

router1.get('/all' ,(req , res) => {
    res.send('All Teachers');
})
router1.post('/create' ,(req , res) => {
    res.send('Sign inn new Teachers');
})
router1.put('/update' ,(req , res) => {
    res.send('Update Teachers ID');
})
router1.delete('/delete' ,(req , res) => {
    res.send('Delete Teachers ID from DB');
})

export default router1;