export const metadata = {
  title: "Trained to Go Fitness",
  description: "Strength • Performance • Simplicity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
