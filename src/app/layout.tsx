import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YassaNCo - Le goût du Sénégal, chez vous !",
  description: "Restaurant sénégalais authentique - Foodtruck et livraison à Yerres. Spécialités : Yassa, Thiebou Dieune, Mafé. Commandez vos plats traditionnels sénégalais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
