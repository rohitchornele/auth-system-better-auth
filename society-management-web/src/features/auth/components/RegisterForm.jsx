import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../validations/register.schema.js'
import { toast } from 'sonner'
import { authClient } from '../services/authClient.js'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const navigate = useNavigate()

  const onSubmit = async values => {
    const { data, error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password
    })

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success('Account created successfully!')

    navigate('/dashboard')
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-neutral-100 px-6 py-10'>
      <div className='w-full max-w-md rounded-2xl border border-(--border) bg-(--card) p-8 shadow-lg'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-(--text)'>
            Create Account
          </h1>

          <p className='mt-2 text-sm text-(--text-secondary)'>
            Create your account to get started.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* Name */}
          <div>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-medium text-neutral-700'
            >
              Full Name
            </label>

            <input
              {...register('name')}
              id='name'
              type='text'
              placeholder='John Doe'
              className='h-11 w-full rounded-lg border border-neutral-300 px-4 outline-none transition focus:border-black'
            />

            {errors.name && (
              <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-neutral-700'
            >
              Email
            </label>

            <input
              {...register('email')}
              id='email'
              type='email'
              placeholder='john@example.com'
              className='h-11 w-full rounded-lg border border-neutral-300 px-4 outline-none transition focus:border-black'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-medium text-neutral-700'
            >
              Password
            </label>

            <input
              {...register('password')}
              id='password'
              type='password'
              placeholder='••••••••'
              className='h-11 w-full rounded-lg border border-neutral-300 px-4 outline-none transition focus:border-black'
            />
            {errors.password && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor='confirmPassword'
              className='mb-2 block text-sm font-medium text-neutral-700'
            >
              Confirm Password
            </label>

            <input
              {...register('confirmPassword')}
              id='confirmPassword'
              type='password'
              placeholder='••••••••'
              className='h-11 w-full rounded-lg border border-neutral-300 px-4 outline-none transition focus:border-black'
            />
            {errors.confirmPassword && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='h-11 w-full rounded-lg bg-black font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Footer */}
        <p className='mt-6 text-center text-sm text-(--text-secondary)'>
          Already have an account?{' '}
          <Link to='/login' className='font-medium text-black hover:underline'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
