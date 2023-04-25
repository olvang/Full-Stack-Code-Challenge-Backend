import Node from '../models/node.model';
import { NodeData } from '../models/node.interfaces';

class NodesService {
  private nodes: Node[] = [];

  public addNode(data: NodeData): Node {
    // Check if the node ID is unique
    const idExists = this.nodes.some((node) => node.id === data.id);
    if (idExists) {
      throw new Error('Node ID already exists');
    }

    // Check if the parent node exists
    if (data.parentId !== null) {
      const parentNode = this.nodes.find((node) => node.id === data.parentId);
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
    const parentNode = this.nodes.find((node) => node.id === parentId);
    if (!parentNode) {
      throw new Error('Parent node not found');
    }

    return this.nodes.filter((node) => node.parentId === parentId);
  }

  public changeParent(nodeId: string, newParentId: string): Node | null {
    const node = this.nodes.find((node) => node.id === nodeId);
    const newParent = this.nodes.find((node) => node.id === newParentId);

    // Check if the node and new parent node exist
    if (!node || !newParent) {
      throw new Error('Node or new parent not found');
    }

    node.parentId = newParentId;
    return node;
  }
}

export default new NodesService();
