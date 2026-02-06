interface VisitorFormProps {
  onSubmit: () => void
}

export function VisitorForm({ onSubmit }: VisitorFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
      <p className="text-slate-600 text-sm mb-4">
        Browse properties without an account.
      </p>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
      >
        Continue as Visitor
      </button>
    </form>
  )
}
