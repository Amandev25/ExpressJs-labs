import express from 'express';
const router = express.Router();
import {homecontroller} from '../Controllers/Home.js'
import {aboutcontroller} from '../Controllers/About.js'

router.get('/' ,homecontroller)
router.get('/about' , aboutcontroller)

export default router;