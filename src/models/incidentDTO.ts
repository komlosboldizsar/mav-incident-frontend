export interface IncidentDTO {
  title: string;
  created: BigInteger;
  updated: BigInteger;
  processed: BigInteger;
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
