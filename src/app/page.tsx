import quoteGet from '@/actions/quote-get';
import CurrentTime from '@/components/current-time/current-time';
import Quote from '@/components/quote/quote';

export default async function Home() {
  const initialQuote = await quoteGet();

  return (
    <main className="flex content-between flex-wrap">
      <Quote initialQuote={initialQuote} />
      <CurrentTime />
    </main>
  );
}
