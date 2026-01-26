export default function AdminPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Admin Dashboard
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Manage your website content, view inquiries, and monitor analytics.
          </p>
          
          <div className="mt-8 rounded-xl border border-stone-200 bg-white p-8">
            <p className="text-sm text-slate-600">
              Admin features coming soon. This area will include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-600">
              <li>Contact form submissions</li>
              <li>Content management</li>
              <li>Analytics dashboard</li>
              <li>User management</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
