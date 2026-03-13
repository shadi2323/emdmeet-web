export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold">Contact</h1>
        <div className="space-y-5 text-lg leading-7">
          <p>
            For support, business inquiries, safety questions, or general information about EMDmeet,
            please contact us using the email below.
          </p>
          <p>
            Email:{" "}
            <a className="text-blue-600 underline" href="mailto:admin@emdmeet.com">
              admin@emdmeet.com
            </a>
          </p>
          <p>Region: Selected Canadian markets</p>
        </div>
      </div>
    </main>
  );
}
