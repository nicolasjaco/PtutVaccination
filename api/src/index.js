import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import CtrlUser from './controllers/UserController';

const config = require('./config/config.js');

// Création de l'application
const app = express();
const router = express.Router();

// Configuration globale
app.use(cors());
app.use(bodyParser.json());

// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });

// API definition
// Users
router.get('/users/', CtrlUser.getAll);
router.get('/user/:id', CtrlUser.getById);
router.post('/user', CtrlUser.create);
router.delete('/user/:id', CtrlUser.deleteById);
// Vaccins

// Rappels



// server startup
app.use('/api', router);
app.listen(config.PORT, () => console.log(`Express server running on port ` + config.PORT));
