export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Data Deletion Request</h1>
        <p className="mb-6 text-sm text-slate-500">Last updated: July 29, 2026</p>
        
        <p className="text-lg leading-8 mb-6">
          EMDMeet is developed and operated by 17494165 CANADA INC.
        </p>
        
        <p className="text-lg leading-8 mb-6">
          Users may request deletion of their account and associated personal data at any time.
        </p>
        
        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Delete your account in the EMDMeet app:</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg leading-8">
            <li>Open Settings.</li>
            <li>Select Delete Account.</li>
            <li>Review the notice and confirm deletion.</li>
          </ol>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            If you cannot access the app, request deletion by email:
          </h2>
          <p className="text-lg leading-8">
            <a href="mailto:admin@emdmeet.com" className="text-blue-600 underline hover:text-blue-800">
              admin@emdmeet.com
            </a>
          </p>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">For an email request, please include:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-8">
            <li>Your account email</li>
            <li>A clear request to delete your account and data</li>
          </ul>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">What will be deleted:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-8">
            <li>Profile information</li>
            <li>Uploaded photos</li>
            <li>Communication history</li>
            <li>Account-related data</li>
          </ul>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">What may be retained:</h2>
          <p className="text-lg leading-8 mb-4">
            Some information may be retained where required for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-8">
            <li>Legal compliance</li>
            <li>Fraud prevention</li>
            <li>Safety and abuse prevention</li>
          </ul>
          <p className="text-lg leading-8 mt-4">
            Retention is limited and only applied where necessary.
          </p>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Processing time:</h2>
          <p className="text-lg leading-8">
            Deletion requests will be processed within a reasonable timeframe.
          </p>
        </div>
        
        <p className="text-lg leading-8">
          This process ensures compliance with applicable privacy and data protection laws.
        </p>
      </div>
    </main>
  );
}
