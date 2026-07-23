import { Link, useNavigate } from 'react-router-dom'
import { Building2, Calendar, MapPin, Plus } from 'lucide-react'
import { useSelectWorkspace } from '../hooks/useSelectWorkspace'
import { useWorkspace } from '../hooks/useWorkspace'


export default function WorkspaceList () {
  const navigate = useNavigate()

  const { workspaces, isLoading, isError, error } = useWorkspace()

  const { selectWorkspace, isSelecting, openingWorkspaceId } =
    useSelectWorkspace()

  async function handleOpenWorkspace (id) {
    try {
      await selectWorkspace(id)
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) {
    return (
      <div className='flex h-[70vh] items-center justify-center'>
        <p className='text-[var(--text-secondary)]'>Loading organizations...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div
        className='rounded-xl p-5'
        style={{
          background: 'rgba(239,68,68,.08)',
          border: '1px solid var(--danger)',
          color: 'var(--danger)'
        }}
      >
        {error?.response?.data?.message ??
          error?.message ??
          'Something went wrong.'}
      </div>
    )
  }

  return (
    <div
      className='min-h-full p-8'
      style={{
        background: 'var(--background)'
      }}
    >
      <div className='mx-auto max-w-7xl'>
        {/* Header */}

        <div className='mb-10 flex items-center justify-between'>
          <div>
            <h1
              className='text-3xl font-bold'
              style={{
                color: 'var(--text)'
              }}
            >
              Organizations
            </h1>

            <p
              className='mt-2'
              style={{
                color: 'var(--text-secondary)'
              }}
            >
              Manage all your organizations from one place.
            </p>
          </div>

          <Link
            to='/dashboard/workspace/create'
            className='inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-colors'
            style={{
              background: 'var(--primary)'
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'var(--primary-hover)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'var(--primary)')
            }
          >
            <Plus size={18} />
            Create Organization
          </Link>
        </div>

        {workspaces.length === 0 ? (
          <div
            className='flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed'
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div
              className='mb-5 flex h-16 w-16 items-center justify-center rounded-xl'
              style={{
                background: 'var(--surface-hover)'
              }}
            >
              <Building2 size={32} color='var(--primary)' />
            </div>

            <h2
              className='text-xl font-semibold'
              style={{
                color: 'var(--text)'
              }}
            >
              No organizations found
            </h2>

            <p
              className='mt-2'
              style={{
                color: 'var(--text-secondary)'
              }}
            >
              Create your first organization to get started.
            </p>

            <Link
              to='/dashboard/workspace/create'
              className='mt-6 rounded-xl px-5 py-2.5 text-sm font-medium text-white'
              style={{
                background: 'var(--primary)'
              }}
            >
              Create Organization
            </Link>
          </div>
        ) : (
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {workspaces.map(workspace => {
              const metadata = workspace.metadata
                ? JSON.parse(workspace.metadata)
                : {}

              return (
                <div
                  key={workspace.id}
                  className='rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl'
                  style={{
                    background: 'var(--card)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div
                    className='mb-5 flex h-14 w-14 items-center justify-center rounded-xl'
                    style={{
                      background: 'var(--surface-hover)'
                    }}
                  >
                    <Building2 size={28} color='var(--primary)' />
                  </div>

                  <h2
                    className='text-xl font-semibold'
                    style={{
                      color: 'var(--text)'
                    }}
                  >
                    {workspace.name}
                  </h2>

                  <p
                    className='mt-1 text-sm'
                    style={{
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {workspace.slug}
                  </p>

                  <div className='mt-6 space-y-3'>
                    <div
                      className='flex items-center gap-2 text-sm'
                      style={{
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <MapPin size={16} />
                      <span>
                        {metadata.city || '-'}, {metadata.state || '-'}
                      </span>
                    </div>

                    <div
                      className='flex items-center gap-2 text-sm'
                      style={{
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <Building2 size={16} />
                      <span>{metadata.societyType || '-'}</span>
                    </div>

                    <div
                      className='flex items-center gap-2 text-sm'
                      style={{
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <Calendar size={16} />
                      <span>
                        {new Date(workspace.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div
                    className='mt-8 pt-5'
                    style={{
                      borderTop: '1px solid var(--border)'
                    }}
                  >
                    <button
                      type='button'
                      disabled={isSelecting}
                      onClick={() => handleOpenWorkspace(workspace.id)}
                      className='w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-60'
                      style={{
                        background:
                          openingWorkspaceId === workspace.id
                            ? 'var(--primary)'
                            : 'var(--surface)',
                        color:
                          openingWorkspaceId === workspace.id
                            ? '#fff'
                            : 'var(--text)',
                        border: '1px solid var(--border)'
                      }}
                      onMouseEnter={e => {
                        if (openingWorkspaceId !== workspace.id) {
                          e.currentTarget.style.background =
                            'var(--surface-hover)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (openingWorkspaceId !== workspace.id) {
                          e.currentTarget.style.background = 'var(--surface)'
                        }
                      }}
                    >
                      {openingWorkspaceId === workspace.id
                        ? 'Opening...'
                        : 'Open Organization'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
