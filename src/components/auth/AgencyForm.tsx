import { useState } from 'react'

interface AgencyFormProps {
  onSubmit: () => void
}

export function AgencyForm({ onSubmit }: AgencyFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="agency-email" className="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          id="agency-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="agency@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="agency-password" className="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          id="agency-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
      >
        Sign in as Agency
      </button>
    </form>
  )
}
