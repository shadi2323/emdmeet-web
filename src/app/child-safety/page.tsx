export default function ChildSafetyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-4xl font-bold">Child Safety Standards</h1>
        <p className="mb-8 text-sm text-slate-500">Last updated: July 25, 2026</p>

        <div className="space-y-6 leading-7">
          <p>
            EMDmeet is an adults-only social and dating service. Users must be at least 18 years old.
            We have zero tolerance for child sexual abuse and exploitation (CSAE), child sexual abuse
            material (CSAM), grooming, sextortion, trafficking, or any conduct that sexualizes or
            endangers a child.
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Prohibited Content and Conduct</h2>
            <p>
              Users may not create, upload, request, share, promote, store, or link to content that
              depicts or facilitates the sexual abuse or exploitation of a child. Users may not use
              EMDmeet to contact, groom, coerce, exploit, traffic, or otherwise endanger a child.
              Accounts that appear to belong to minors are not permitted.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Prevention and Enforcement</h2>
            <p>
              EMDmeet reviews applicant information and may investigate reports, restrict access,
              remove content, suspend or permanently ban accounts, preserve relevant records, and
              take other appropriate safety measures. Confirmed violations may be reported to the
              appropriate regional or national authorities as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">In-App Reporting</h2>
            <p>
              Users can report a profile or safety concern from within the EMDmeet app. Reports are
              reviewed and may result in content removal, account restrictions, suspension, or a
              permanent ban. Users can also block another user.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">How to Report a Child Safety Concern</h2>
            <p>
              For urgent danger, contact local emergency services. To report suspected CSAE, CSAM,
              grooming, or another child safety concern involving EMDmeet, use the in-app reporting
              tools or email{" "}
              <a className="text-blue-600 underline" href="mailto:admin@emdmeet.com">
                admin@emdmeet.com
              </a>
              . Please include enough information for us to locate and review the relevant account or
              incident. Do not send or redistribute illegal imagery.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Designated Safety Contact</h2>
            <p>
              EMDmeet&apos;s designated contact for child safety and CSAM prevention compliance is{" "}
              <a className="text-blue-600 underline" href="mailto:admin@emdmeet.com">
                admin@emdmeet.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Operator</h2>
            <p>EMDmeet is developed, owned, and operated by 17494165 CANADA INC.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
