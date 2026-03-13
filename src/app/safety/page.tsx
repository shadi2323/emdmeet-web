export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Safety & Community Standards</h1>
        <div className="space-y-6 leading-7">
          <p>
            Safety is a core part of EMDmeet. We aim to provide a more intentional, structured, and
            better-managed offline social experience.
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Profile Review</h2>
            <p>
              Profiles may be reviewed before participation. We may evaluate submitted information,
              photos, consistency, and other safety-related factors.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">User Reporting</h2>
            <p>
              Users may report suspicious, abusive, fraudulent, or unsafe behavior. Reports may be
              reviewed manually and may result in restrictions, cancellations, or bans.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Zero Tolerance</h2>
            <p>
              We do not tolerate harassment, threats, coercion, impersonation, fraud, hate-based
              conduct, sexual exploitation, or other unsafe behavior.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Offline Meeting Caution</h2>
            <p>
              Users should exercise judgment, meet only when comfortable, and follow common-sense
              personal safety practices for in-person meetings.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
            <p>
              Safety concerns can be reported to{" "}
              <a className="text-blue-600 underline" href="mailto:admin@emdmeet.com">
                admin@emdmeet.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
