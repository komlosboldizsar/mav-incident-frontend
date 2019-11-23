import { PlaceOpeningHours } from './PlaceOpeningHours'

export class PlaceResult {
    name: string;
    geometry: any;
    vicinity: string;
    icon: string;
    rating: number;
    user_ratings_total: number;
    price_level: number;
    opening_hours: PlaceOpeningHours;
    place_id: string;
    types: string[];
}
