import quoteGet from '@/actions/quote-get';
import Quote from '@/components/quote/quote';

export default async function Home() {
  const initialQuote = await quoteGet();

  return (
    <main>
      <Quote initialQuote={initialQuote} />
    </main>
  );
}
