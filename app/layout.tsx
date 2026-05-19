import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runway Alerter — Smart Cash Runway Alerts for Startups",
  description: "Connect bank accounts and expense tools to predict cash runway with trend analysis. Get alerts before burn rate changes threaten your survival timeline."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d8708847-fff8-4d8e-8442-4b095b58db5a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
