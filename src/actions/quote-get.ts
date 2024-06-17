'use server';

import { QUOTE_GET } from '@/functions/api/api-quote';

type Quote = {
  content: string;
  author: string;
};

export default async function quoteGet() {
  const { url } = QUOTE_GET();

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Error fetching');
    const data = (await response.json()) as Quote;
    return { data, ok: true, error: '' };
  } catch (error) {
    if (error instanceof Error)
      return { data: null, ok: false, error: error.message };
    else
      return { data: null, ok: false, error: 'An unexpected error occurred.' };
  }
}
