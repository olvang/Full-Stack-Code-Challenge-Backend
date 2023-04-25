import { NodeData } from './node.interfaces';

class Node {
  id: string;
  name: string;
  parentId: string | null;
  height: number;
  department?: string;
  programmingLanguage?: string;

  constructor(data: NodeData) {
    this.id = data.id;
    this.name = data.name;
    this.parentId = data.parentId;
    this.height = data.height;
    this.department = data.department;
    this.programmingLanguage = data.programmingLanguage;
  }
}

export default Node;
