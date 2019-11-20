export interface IncidentDTO {
  title: string;
  created: Date;
  updated: Date;
  processed: Date;
  locations: Array<any>;
  categories: Array<any>;
}
