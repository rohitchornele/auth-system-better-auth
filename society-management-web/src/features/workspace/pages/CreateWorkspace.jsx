import { Building2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import CreateWorkspaceForm from '../components/CreateWorkspaceForm'
import { useWorkspace } from '../hooks/useWorkspace'

export default function CreateWorkspace () {
  const navigate = useNavigate()

  const { createWorkspace, isCreating } = useWorkspace()

  async function handleSubmit (values) {
    try {
      await createWorkspace(values)
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='min-h-full p-8' style={{ background: 'var(--background)' }}>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-10 text-center'>
          <div
            className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl'
            style={{
              background: 'var(--surface-hover)'
            }}
          >
            <Building2 size={32} color='var(--primary)' />
          </div>

          <h1 className='text-3xl font-bold' style={{ color: 'var(--text)' }}>
            Create Organization
          </h1>

          <p
            className='mt-2'
            style={{
              color: 'var(--text-secondary)'
            }}
          >
            Set up your organization to start managing residents, visitors and
            facilities.
          </p>
        </div>

        <CreateWorkspaceForm onSubmit={handleSubmit} loading={isCreating} />
      </div>
    </div>
  )
}
