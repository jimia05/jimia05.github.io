const NotFound = () => (
  <main className="mx-auto flex max-w-[1440px] flex-col items-start gap-4 px-5 pt-24 sm:px-10 lg:px-20">
    <h1 className="text-4xl font-normal text-ink">Page not found</h1>
    <p className="text-lg text-body">That page doesn't exist.</p>
    <a href="/" className="font-semibold text-[#2563eb] underline underline-offset-2">
      Back to home
    </a>
  </main>
);

export default NotFound;
