export const metadata = {
  title: "Privacy Policy | PulseMind App",
  description: "Privacy policy outlining how PulseMind protects user data and health information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">✅ Privacy Policy – PulseMind App</h1>
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> 07/22/2025 &nbsp;&nbsp;|&nbsp;&nbsp; 
        <strong>Last Updated:</strong> 07/22/2025
      </p>

      <div className="space-y-6 text-gray-800">
        <section>
          <h2 className="font-semibold text-lg mb-1">1. Introduction</h2>
          <p>
            PulseMind (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you use our iOS and watchOS application ("PulseMind").
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">2. Data We Collect</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Health Data:</strong> Heart Rate, HRV, Respiratory Rate, Blood Oxygen, Sleep Hours — accessed with your explicit HealthKit permissions.
            </li>
            <li>
              <strong>User Input:</strong> Journal entries, breathing preferences, reminder settings.
            </li>
            <li>
              <strong>Device Info:</strong> Device type and OS version (for support and optimization).
            </li>
            <li>
              <strong>Purchase Data:</strong> If you use in-app purchases, Apple may share anonymized transaction info.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">3. How We Use Your Data</h2>
          <ul className="list-disc ml-6">
            <li>To provide health insights and calculate your personalized stress score.</li>
            <li>To enable journaling, reminders, and breathing exercises.</li>
            <li>To improve and maintain the app experience.</li>
            <li>To comply with legal obligations (only when required).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">4. Data Storage and Security</h2>
          <p>
            All sensitive data such as health metrics and journal entries are stored locally on your device and not transmitted to any external servers. We do not collect or store any personal identifiers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">5. Third-Party Services</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Apple HealthKit:</strong> Used solely to read data with your permission.
            </li>
            <li>
              <strong>Notification Center:</strong> For local reminders.
            </li>
            <li>
              <strong>In-App Purchases:</strong> Handled securely via Apple.
            </li>
          </ul>
          <p>We do not sell or share your personal data with third parties.</p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">6. Your Rights</h2>
          <ul className="list-disc ml-6">
            <li>You can revoke HealthKit permissions via the Apple Health app at any time.</li>
            <li>You can delete all data by using the “Reset All Data” feature in Settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">7. Children’s Privacy</h2>
          <p>
            PulseMind is not intended for children under 13 years old. We do not knowingly collect data from children.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this policy, contact us at:{" "}
            <a
              href="mailto:choti2792@gmail.com"
              className="text-blue-600 underline"
            >
              choti2792@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
