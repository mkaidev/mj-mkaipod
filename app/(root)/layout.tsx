export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p
          className="text-white-1
        "
        >
          LeftSidebar
        </p>
        {children}
        <p className="text-white-1">RightSidebar</p>
      </main>
    </div>
  );
}
