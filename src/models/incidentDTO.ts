export interface IncidentDTO {
  title: string;
  created: Date;
  updated: Date;
  processed: Date;
  locations: Array<LocationDTO>;
  categories: Array<CategoryDTO>;
}

export interface LocationDTO {
  id: BigInteger;
  label: string;
}

export interface CategoryDTO {
  id: BigInteger;
  label: string;
}
