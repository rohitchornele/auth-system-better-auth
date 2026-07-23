import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { workspaceSchema } from '../validations/workspace.schema'

export default function CreateWorkspaceForm ({ onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      name: '',
      slug: '',
      societyType: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    }
  })

  const inputStyle =
    'mt-2 w-full rounded-xl border px-4 py-3 outline-none transition'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='rounded-2xl border p-8 shadow-sm'
      style={{
        background: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      <div className='grid gap-6 md:grid-cols-2'>
        {/* Society Name */}

        <div className='md:col-span-2'>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            Organization Name
          </label>

          <input
            {...register('name')}
            placeholder='Green Valley Society'
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />

          {errors.name && (
            <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>
          )}
        </div>

        {/* Slug */}

        <div>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            Slug
          </label>

          <input
            {...register('slug')}
            placeholder='green-valley'
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />

          {errors.slug && (
            <p className='mt-1 text-sm text-red-500'>{errors.slug.message}</p>
          )}
        </div>

        {/* Society Type */}

        <div>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            Society Type
          </label>

          <select
            {...register('societyType')}
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          >
            <option value=''>Select Type</option>
            <option value='Apartment'>Apartment</option>
            <option value='Gated Community'>Gated Community</option>
            <option value='Villa'>Villa</option>
            <option value='Commercial'>Commercial</option>
          </select>

          {errors.societyType && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.societyType.message}
            </p>
          )}
        </div>

        {/* Address */}

        <div className='md:col-span-2'>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            Address
          </label>

          <textarea
            {...register('address')}
            rows={3}
            placeholder='Street, Area, Landmark...'
            className={`${inputStyle} resize-none`}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />
        </div>

        {/* City */}

        <div>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            City
          </label>

          <input
            {...register('city')}
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />
        </div>

        {/* State */}

        <div>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            State
          </label>

          <input
            {...register('state')}
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />
        </div>

        {/* Pincode */}

        <div>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            Pincode
          </label>

          <input
            {...register('pincode')}
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />
        </div>

        {/* Country */}

        <div>
          <label
            className='text-sm font-medium'
            style={{ color: 'var(--text)' }}
          >
            Country
          </label>

          <input
            {...register('country')}
            className={inputStyle}
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
          />
        </div>
      </div>

      <div className='mt-8 flex justify-end'>
        <button
          type='submit'
          disabled={loading}
          className='rounded-xl px-6 py-3 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60'
          style={{
            background: 'var(--primary)'
          }}
        >
          {loading ? 'Creating...' : 'Create Organization'}
        </button>
      </div>
    </form>
  )
}
