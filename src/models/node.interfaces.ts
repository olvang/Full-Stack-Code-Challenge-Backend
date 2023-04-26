export interface NodeData {
  id: string;
  name: string;
  parentId: string | null;
  height: number;
  department?: string;
  programmingLanguage?: string;
}

export type AddNodeData = Omit<NodeData, 'id' | 'height'>;
