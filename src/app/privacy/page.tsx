export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-4 text-sm text-slate-500">Last updated: March 2026</p>

        <div className="space-y-6 leading-7">
          <p>
            EMDmeet respects your privacy. This Privacy Policy explains what information we collect,
            how we use it, and how we protect it when you use our website and services.
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">1. Information We Collect</h2>
            <p>
              We may collect information you provide directly, including your name, email address,
              profile details, preferences, photos, communication history, and other information
              submitted through our platform.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">2. How We Use Information</h2>
            <p>
              We use information to operate the service, review profiles, facilitate match
              coordination, improve safety, communicate with users, prevent abuse, and comply with
              legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">3. Safety and Verification</h2>
            <p>
              We may review submitted information, photos, profile details, and activity data to
              support safety, moderation, fraud prevention, and service quality control.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">4. Sharing of Information</h2>
            <p>
              We do not sell personal information. We may share limited information with service
              providers that help us operate the platform, or when required by law, safety needs,
              dispute handling, or abuse investigations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">5. Data Retention</h2>
            <p>
              We retain information for as long as reasonably necessary to operate the service,
              maintain safety records, resolve disputes, and meet legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">6. Your Choices</h2>
            <p>
              You may contact us regarding access, correction, or account-related requests. Some
              information may still be retained where required for safety, fraud prevention, or
              legal compliance.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">7. Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
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
