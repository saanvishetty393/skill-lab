import "./globals.css";

export const metadata = {
  title: "Portfolio | UI/UX designer",
  description: "I create meaningful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
