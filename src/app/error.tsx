"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="not-found-page">
      <p className="eyebrow">Error</p>
      <h1 className="display mt-4 text-[clamp(36px,7vw,72px)] text-white">Something broke.</h1>
      <p className="mt-4 max-w-md text-[#888]">
        The academy is still standing. Try again, or return to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <button type="button" className="btn btn-red" onClick={reset}>
          Try again
        </button>
        <a href="/" className="btn btn-outline">
          Go home
        </a>
      </div>
    </main>
  );
}
