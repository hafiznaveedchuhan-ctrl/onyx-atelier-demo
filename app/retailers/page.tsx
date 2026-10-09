import RetailerForm from '@/components/RetailerForm';
export default function Retailers() {
  return (
    <section className="page retail-page">
      <div>
        <h1>For stores and boutiques</h1>
        <p className="lede">We supply wine and liquor stores and gift boutiques across Albany, Saratoga Springs and the Capital Region.</p>
        <ol className="steps">
          <li><strong>Request the line sheet.</strong> Wholesale prices, minimum order and lead times.</li>
          <li><strong>See samples in your store.</strong> We bring pieces so you can see the stone in person.</li>
          <li><strong>Place your first order.</strong> We help you plan the display for your shelves.</li>
        </ol>
      </div>
      <RetailerForm />
    </section>
  );
}
