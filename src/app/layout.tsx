import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anicet Coding — Studio de Développement IA Autonome Haute Fidélité",
  description: "Concevez, prévisualisez en direct et exportez des applications web et mobiles complètes sans crash, propulsé par vos modèles IA préférés.",
  openGraph: {
    title: "Anicet Coding — Studio IA Autonome",
    description: "Environnement d'ingénierie full-stack avec runtime anti-crash HMR Gate, inspecteur click-to-edit et export APK Android.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050608",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="antialiased bg-[#050608] text-neutral-100 selection:bg-white/20 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
