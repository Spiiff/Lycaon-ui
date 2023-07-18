export type Project = {
  id: number;
  name: string;
  description: string;
}
export type Work = {
  id: number;
  projectId: number;
  name:string;
  data: string;
  hours: number;
  user: string;
  description: string;
}
