import { CountryData } from './country-data.interface';

export const COUNTRIES_DATA: CountryData[] = [
    {
        id: 'US',
        name: 'United States',
        details: {
          official_name: 'United States of America',
          capital: 'Washington, D.C.',
          language: 'English',
          currency: 'United States Dollar (USD)',
          government_type: 'Federal Republic',
          area_sq_km: 9834000,
          population: 331000000,
        },
      },
      {
        id: 'GB',
        name: 'United Kingdom',
        details: {
          official_name: 'United Kingdom',
          capital: 'London',
          language: 'English',
          currency: 'Pound sterling (GBP)',
          government_type: 'Constitutional monarchy',
          area_sq_km: 243610,
          population: 66800000,
        },
      },
      {
        id: 'CN',
        name: 'China',
        details: {
          official_name: "People's Republic of China",
          capital: 'Beijing',
          language: 'Mandarin',
          currency: 'Renminbi (CNY)',
          government_type: 'Single-party Socialist Republic',
          area_sq_km: 9596961,
          population: 1402000000,
        },
      },
      {
        id: 'IN',
        name: 'India',
        details: {
          official_name: 'Republic of India',
          capital: 'New Delhi',
          language: 'Hindi, English',
          currency: 'Indian Rupee (INR)',
          government_type: 'Federal Parliamentary Republic',
          area_sq_km: 3287263,
          population: 1380000000,
        },
      },
      {
        id: 'AU',
        name: 'Australia',
        details: {
          official_name: 'Commonwealth of Australia',
          capital: 'Canberra',
          language: 'English',
          currency: 'Australian Dollar (AUD)',
          government_type: 'Federal Parliamentary Constitutional Monarchy',
          area_sq_km: 7692024,
          population: 25000000,
        },
      },
      {
        id: 'CA',
        name: 'Canada',
        details: {
          official_name: 'Canada',
          capital: 'Ottawa',
          language: 'English, French',
          currency: 'Canadian Dollar (CAD)',
          government_type: 'Federal Parliamentary Constitutional Monarchy',
          area_sq_km: 9984670,
          population: 37590000,
        },
      },
      {
        id: 'BR',
        name: 'Brazil',
        details: {
          official_name: 'Federative Republic of Brazil',
          capital: 'Brasília',
          language: 'Portuguese',
          currency: 'Brazilian Real (BRL)',
          government_type: 'Federal Presidential Republic',
          area_sq_km: 8515767,
          population: 211000000,
        },
      },
      {
        id: 'ZA',
        name: 'South Africa',
        details: {
          official_name: 'Republic of South Africa',
          capital:
            'Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)',
          language:
            'Zulu, Xhosa, Afrikaans, English, and 7 other official languages',
          currency: 'South African Rand (ZAR)',
          government_type: 'Parliamentary Republic',
          area_sq_km: 1219090,
          population: 59300000,
        },
      }
];
