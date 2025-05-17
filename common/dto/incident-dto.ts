export interface IncidentDTO {
  id: string;
  title: string;
  description: string | null;
  created_at: string;
  user_id: string;
  username: string | null;
  tags: string[];
}
