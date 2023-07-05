import Sidebar from "@/components/Navigation/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col  flex-grow mb-8">
        {children}
      </div>
    </div>
  )
}
