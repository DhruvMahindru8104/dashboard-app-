import '@/app/ui/global.css'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
<html>
<body>
    <div className="flex h-screen flex-col ">
      <div className="w-full flex-none  text-center p-2 bg-blue-500 text-4xl">
      yeh sirf app k andr jo login page hai uske liye layout
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
</body>
</html>

  );
}