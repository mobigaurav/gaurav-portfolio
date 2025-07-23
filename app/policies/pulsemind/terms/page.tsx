export const metadata = {
  title: "Terms of Service | PulseMind App",
  description: "Terms and conditions for using the PulseMind wellness app.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">✅ Terms of Service – PulseMind App</h1>
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> 07/22/2025 &nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>Last Updated:</strong> 07/22/2025
      </p>

      <div className="space-y-6 text-gray-800">
        <section>
          <h2 className="font-semibold text-lg mb-1">1. Acceptance of Terms</h2>
          <p>
            By downloading or using PulseMind, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use the app.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">2. Health Disclaimer</h2>
          <p>
            PulseMind is not a medical device. The insights provided, including the stress score,
            are for informational purposes only and are not a substitute for professional medical advice.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">3. App Usage</h2>
          <p>
            You agree to use the app only for lawful purposes and in a way that does not infringe on
            the rights of others.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">4. User Content</h2>
          <p>
            Any journal entries or input data you provide remain your property and are stored locally
            on your device. We do not access or share your content.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">5. In-App Purchases</h2>
          <p>
            PulseMind may offer premium features through a one-time in-app purchase. All purchases
            are handled securely by Apple. We do not manage refunds directly.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">6. Modifications</h2>
          <p>
            We may update the app and these terms from time to time. Continued use of the app after
            any changes indicates your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">7. Termination</h2>
          <p>
            We reserve the right to terminate access to the app for violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-1">8. Contact</h2>
          <p>
            Questions or concerns? Email us at:{" "}
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
