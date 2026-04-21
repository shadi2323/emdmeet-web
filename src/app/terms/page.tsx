export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Terms of Service</h1>
        <p className="mb-4 text-sm text-slate-500">Last updated: March 2026</p>

        <div className="space-y-6 leading-7">
          <p>
            By accessing or using EMDmeet, you agree to these Terms of Service.
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">1. Service Overview</h2>
            <p>
              EMDmeet is a service that facilitates structured offline one-on-one social
              connections in selected regions. Use of the service is subject to review, approval,
              availability, and safety controls.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">2. Eligibility</h2>
            <p>
              You must provide accurate information and comply with applicable laws. We may refuse,
              limit, suspend, or terminate access at our discretion where safety, policy, or
              service integrity concerns arise.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">3. User Conduct</h2>
            <p>
              Users may not harass, threaten, deceive, impersonate others, submit false
              information, misuse the platform, or engage in unlawful, abusive, exploitative, or
              unsafe conduct.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">4. Moderation and Enforcement</h2>
            <p>
              We may review accounts, investigate incidents, remove content, cancel arrangements,
              restrict participation, or permanently ban users in order to protect service quality
              and user safety.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">5. No Guarantee</h2>
            <p>
              We do not guarantee compatibility, outcomes, availability, or uninterrupted service.
              Participation in offline meetings is at your own discretion and risk.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">6. Commitment-Based Participation</h2>
            <p>
              EMDMeet uses a structured system to improve reliability, reduce no-shows, and support a better user experience.
            </p>
            <p>
              This system is designed to encourage responsible participation and is not a payment for interactions or outcomes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">7. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
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
