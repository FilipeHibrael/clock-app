'use client';
import quoteGet, { TypeQuote } from '@/actions/quote-get';
import RefreshIcon from '@/icons/refresh-icon';
import React, { useState } from 'react';

type DataQuote = {
  data: TypeQuote | null;
  ok: boolean;
  error: string;
};

export default function Quote({ initialQuote }: { initialQuote: DataQuote }) {
  const [quote, setQuote] = useState(initialQuote);

  async function reloadData() {
    const data = await quoteGet();
    setQuote(data);
  }

  if (!quote.data) return null;
  return (
    <section className=" text-color-white text-lg max-w-[1200px] mx-auto pt-12 px-4">
      <div className="flex gap-8 items-start justify-between max-w-[580px]">
        <blockquote className="max-w-[48ch]">
          {`"${quote.data.content}"`}
          <cite className="block font-bold mt-2">{quote.data.author}</cite>
        </blockquote>
        <span className=" group cursor-pointer p-1" onClick={reloadData}>
          <RefreshIcon className="group-hover:opacity-100 transition-all" />
        </span>
      </div>
    </section>
  );
}
