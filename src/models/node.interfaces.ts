export interface NodeData {
  id: string;
  name: string;
  parentId: string | null;
  height: number;
  department?: string;
  programmingLanguage?: string;
}
