import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { User, AtSign, Lock, UserPlus, Github, AlertCircle, Check } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/layouts/AuthLayout'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()
  const navigate = useNavigate()
  const { register: registerUser, loginWithGoogle, loginWithGitHub } = useAuth()
  const [error, setError] = useState(null)
  const password = watch('password', '')

  const passwordStrength = (password) => {
    let score = 0
    if (password.length >= 8) score += 1
    if (/[A-Z]/.test(password)) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1
    return score
  }

  const getStrengthColor = (strength) => {
    if (strength <= 1) return 'bg-red-500'
    if (strength === 2) return 'bg-yellow-500'
    if (strength === 3) return 'bg-blue-500'
    return 'bg-green-500'
  }

  const getStrengthText = (strength) => {
    if (strength <= 1) return 'Weak'
    if (strength === 2) return 'Fair'
    if (strength === 3) return 'Good'
    return 'Strong'
  }

  const onSubmit = async (data) => {
    setError(null)
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    const { success, error } = await registerUser(data.name, data.email, data.password)
    if (success) {
      navigate('/')
    } else {
      setError(error || 'Registration failed')
    }
  }

  return (
    <AuthLayout 
      title="Join Our Community!"
      subtitle="Create your account to start designing beautiful paper decorations for your special moments."
      type="register"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold font-poppins text-gray-800">Create Account</h3>
        <p className="text-gray-500">Join thousands of happy customers</p>
      </div>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2 mb-4"
        >
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input 
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })} 
            type="text"
            placeholder="Full Name"
            className={`input-field pl-10 ${errors.name ? 'input-error' : ''}`}
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        
        <div className="relative">
          <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input 
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })} 
            type="email"
            placeholder="Email Address"
            className={`input-field pl-10 ${errors.email ? 'input-error' : ''}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input 
            {...register('password', { 
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' }
            })} 
            type="password"
            placeholder="Password"
            className={`input-field pl-10 ${errors.password ? 'input-error' : ''}`}
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        
        {/* Password Strength Indicator */}
        {password && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${getStrengthColor(passwordStrength(password))}`}
                  style={{ width: `${(passwordStrength(password) / 4) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">{getStrengthText(passwordStrength(password))}</span>
            </div>
          </div>
        )}
        
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input 
            {...register('confirmPassword', { 
              required: 'Please confirm your password'
            })} 
            type="password"
            placeholder="Confirm Password"
            className={`input-field pl-10 ${errors.confirmPassword ? 'input-error' : ''}`}
          />
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input 
              {...register('terms', { required: 'You must accept the terms and conditions' })}
              id="terms" 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" 
            />
          </div>
          <div className="ml-2 text-sm">
            <label htmlFor="terms" className="text-gray-900">
              I agree to the{' '}
              <Link to="/terms" className="text-primary-600 hover:text-primary-700 underline">
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          {isSubmitting ? <span className="spinner"></span> : <UserPlus className="h-5 w-5" />}
          <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or sign up with</span>
        </div>
      </div>

      <div className="space-y-3">
        <button onClick={loginWithGoogle} className="btn-social">
          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span>Sign up with Google</span>
        </button>
        <button onClick={loginWithGitHub} className="btn-social">
          <Github className="h-5 w-5" />
          <span>Sign up with GitHub</span>
        </button>
      </div>
      
      <p className="text-center text-sm text-gray-600 mt-8">
        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">Sign in</Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
