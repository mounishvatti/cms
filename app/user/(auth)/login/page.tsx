"use client"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-2 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
      <LoginForm />
      </div>
    </div>
  )
}