import express from 'express';
const router = express.Router();
import {homeController} from '../Controllers/Home.js'
import {aboutController} from '../Controllers/About.js'

router.get('/' ,homeController)
router.get('/about' , aboutController)

export default router;