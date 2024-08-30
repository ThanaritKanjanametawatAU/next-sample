// /app/vat/page.js
"use client";

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function VATPage() {
  const { register, handleSubmit } = useForm();
  const [vatAmount, setVatAmount] = useState(null);

  const onSubmit = (data) => {
    const amount = parseFloat(data.amount);
    const vatRate = parseFloat(data.vatRate) / 100; // Convert VAT rate to decimal
    const vat = amount * vatRate;
    setVatAmount(vat);
  };

  return (
    <div>
      <h1>Calculate VAT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" {...register('amount', { required: true })} />
        </div>
        <div>
          <label htmlFor="vatRate">VAT Rate (%):</label>
          <input type="number" {...register('vatRate', { required: true })} />
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>

      {vatAmount !== null && (
        <p>VAT Amount: {vatAmount.toFixed(2)}</p>
      )}
    </div>
  );
}
