import { Request, Response } from 'express';
import nodesService from '../services/nodes.service';
import { AddNodeData } from '../models/node.interfaces';

export const addNode = (req: Request, res: Response): void => {
  const data: AddNodeData = req.body;

  try {
    const newNode = nodesService.addNode(data);
    res.status(201).json(newNode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getChildNodes = (req: Request, res: Response): void => {
  const parentId = req.params.parentId;

  try {
    const children = nodesService.getChildNodes(parentId);
    res.status(200).json(children);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const changeParent = (req: Request, res: Response): void => {
  const nodeId = req.params.nodeId;
  const newParentId = req.body.newParentId;

  try {
    const updatedNode = nodesService.changeParent(nodeId, newParentId);
    res.status(200).json(updatedNode);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
