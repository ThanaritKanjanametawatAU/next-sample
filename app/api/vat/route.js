// /app/api/vat/route.js
export async function GET(request) {
    const url = new URL(request.url);
    const amount = parseFloat(url.searchParams.get('amount')) || 0;
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


// /app/api/vat/route.js
export async function POST(request) {
    const { amount } = await request.json();
    const vatRate = parseFloat(process.env.VAT_RATE) || 0.07;
    const vat = Math.round(amount * vatRate * 100) / 100;

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
