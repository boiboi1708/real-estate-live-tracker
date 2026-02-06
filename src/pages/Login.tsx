import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VisitorForm } from '../components/auth/VisitorForm'
import { AgencyForm } from '../components/auth/AgencyForm'

type Tab = 'visitor' | 'agency'

export default function Login() {
  const [activeTab, setActiveTab] = useState<Tab>('visitor')
  const navigate = useNavigate()

  const handleVisitorSubmit = () => {
    navigate('/visitor')
  }

  const handleAgencySubmit = () => {
    navigate('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-full max-w-md">
        <div className="flex rounded-t-xl overflow-hidden border border-slate-200 bg-slate-100">
          <button
            type="button"
            onClick={() => setActiveTab('visitor')}
            className={`flex-1 py-3 px-4 font-medium transition-colors ${
              activeTab === 'visitor'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Visitor
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('agency')}
            className={`flex-1 py-3 px-4 font-medium transition-colors ${
              activeTab === 'agency'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Agency
          </button>
        </div>

        <div className="border border-t-0 border-slate-200 rounded-b-xl p-6 bg-white shadow-sm">
          {activeTab === 'visitor' ? (
            <VisitorForm onSubmit={handleVisitorSubmit} />
          ) : (
            <AgencyForm onSubmit={handleAgencySubmit} />
          )}
        </div>
      </div>
    </div>
  )
}
