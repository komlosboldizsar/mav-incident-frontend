export interface IncidentDTO {
  id: number;
  title: string;
  created: Date;
  updated: Date;
  processed: Date;
  locations: Array<LocationDTO>;
  categories: Array<CategoryDTO>;
  content?: string;
}

export interface LocationDTO {
  id: BigInteger;
  name: string;
}

export interface CategoryDTO {
  id: BigInteger;
  name: string;
}
