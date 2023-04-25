// src/routes/nodes.routes.ts

import express from 'express';
import {
  addNode,
  getChildNodes,
  changeParent,
} from '../controllers/nodes.controller';

const router = express.Router();

router.post('/', addNode);

router.get('/:parentId/children', getChildNodes);

router.patch('/:nodeId/parent', changeParent);

export default router;
