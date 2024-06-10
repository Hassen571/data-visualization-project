export interface CountryData {
    id: string;
    name: string;
    details: {
      official_name: string;
      capital: string;
      language: string;
      currency: string;
      government_type: string;
      area_sq_km: number;
      population: number;
    };
  }
  