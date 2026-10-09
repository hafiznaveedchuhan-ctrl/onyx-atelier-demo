'use client';
export default function AskButton({ label, prompt, solid }: { label: string; prompt?: string; solid?: boolean }) {
  return (
    <button type="button" className={`btn ${solid ? 'btn-dark' : 'btn-outline'}`}
      onClick={() => window.dispatchEvent(new CustomEvent('onyx-ask', { detail: prompt ?? '' }))}>
      {label}
    </button>
  );
}
