// src/services/nodes.service.ts

import Node from '../models/node.model';
import { NodeData } from '../models/node.interfaces';

class NodesService {
  private nodes: Node[] = [];

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

  public addNode(data: NodeData): Node {
    // Check if the node ID is unique
    const idExists = this.nodes.some((node) => node.id === data.id);
    if (idExists) {
      throw new Error('Node ID already exists');
    }

    // Check if the parent node exists
    if (data.parentId !== null) {
      const parentNode = this.findNodeById(data.parentId);
      if (!parentNode) {
        throw new Error('Parent node not found');
      }
    }

    const newNode = new Node(data as Node);
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
