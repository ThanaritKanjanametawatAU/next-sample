// /app/api/vat/[amount]/route.js
export async function GET(request, { params }) {
    const amount = parseFloat(params.amount) || 0;
    const vatRate = parseFloat(process.env.VAT_RATE) || 0.07;
    const vat = amount * vatRate;

    return new Response(
        JSON.stringify({
            rate: vatRate,
            amount: amount,
            vat: vat,
        }),
        {
            headers: { 'Content-Type': 'application/json' },
        }
    );
}
