'use server';

import { IPDATA_GET } from '@/functions/api/api-ipdata';

type TimeZone = {
  name: string;
  abbr: string;
  is_dst: boolean;
  current_time: string;
};

type TypeIPData = {
  city: string;
  country_code: string;
  time_zone: TimeZone;
};

export default async function quoteGet() {
  const { url } = IPDATA_GET();

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Error fetching');
    const data = (await response.json()) as TypeIPData;
    return { data, ok: true, error: '' };
  } catch (error) {
    if (error instanceof Error)
      return { data: null, ok: false, error: error.message };
    else
      return { data: null, ok: false, error: 'An unexpected error occurred.' };
  }
}
