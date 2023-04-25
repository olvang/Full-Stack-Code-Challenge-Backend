// src/services/nodes.service.ts

import Node from '../models/node.model';
import { NodeData, AddNodeData } from '../models/node.interfaces';
import { v4 as uuidv4 } from 'uuid';

class NodesService {
  private nodes: Node[] = [];

  constructor() {
    this.addNode({
      id: uuidv4(),
      name: 'CEO',
      parentId: null,
      height: 0,
    });
  }

  private findNodeById(nodeId: string): Node | undefined {
    return this.nodes.find((node) => node.id === nodeId);
  }

  private validateNodeAndParent(
    node: Node | undefined,
    parent: Node | undefined
  ): void {
    if (!node || !parent) {
      throw new Error('Node or new parent not found');
    }
  }

  public addNode(data: AddNodeData): Node {
    // Check if the parent node exists
    if (data.parentId !== null) {
      const parentNode = this.findNodeById(data.parentId);
      if (!parentNode) {
        throw new Error('Parent node not found');
      }
    }

    const id = uuidv4();

    const newNode = new Node({ ...data, id });
    this.nodes.push(newNode);
    return newNode;
  }

  public getChildNodes(parentId: string): Node[] {
    // Check if the parent node exists
    const parentNode = this.findNodeById(parentId);
    if (!parentNode) {
      throw new Error('Parent node not found');
    }

    return this.nodes.filter((node) => node.parentId === parentId);
  }

  public changeParent(nodeId: string, newParentId: string): Node | null {
    const node = this.findNodeById(nodeId);
    const newParent = this.findNodeById(newParentId);

    // Check if the node and new parent node exist
    this.validateNodeAndParent(node, newParent);

    if (node) {
      node.parentId = newParentId;
    }

    return node;
  }
}

export default new NodesService();
