import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, ArrowLeft, AlertCircle, CheckCircle, RefreshCw, Package } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm()
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [step, setStep] = useState('mobile') // 'mobile' or 'otp'
  const [countdown, setCountdown] = useState(0)
  const [mobileNumber, setMobileNumber] = useState('')
  const [isResending, setIsResending] = useState(false)

  // Countdown timer for OTP resend
  React.useEffect(() => {
    let interval = null
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1)
      }, 1000)
    } else if (countdown === 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [countdown])

  const sendOTP = async (data) => {
    setError(null)
    setIsResending(true)
    
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setMobileNumber(data.mobile)
      setStep('otp')
      setCountdown(30) // 30 seconds countdown
      setSuccess('OTP sent successfully to your mobile number and WhatsApp!')
      
      // Auto-focus on first OTP input
      setTimeout(() => {
        document.getElementById('otp-0')?.focus()
      }, 100)
      
    } catch (err) {
      setError('Failed to send OTP. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  const verifyOTP = async (data) => {
    setError(null)
    
    try {
      // Combine OTP digits
      const otpCode = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}${data.otp5}${data.otp6}`
      
      if (otpCode.length !== 6) {
        setError('Please enter the complete 6-digit OTP')
        return
      }
      
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock login success
      const { success } = await login('user@example.com', 'password')
      if (success) {
        setSuccess('Login successful!')
        setTimeout(() => navigate('/'), 1500)
      }
      
    } catch (err) {
      setError('Invalid OTP. Please try again.')
    }
  }

  const handleOTPInput = (index, value, e) => {
    if (value.length === 1 && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    } else if (e.key === 'Backspace' && index > 0 && !value) {
      document.getElementById(`otp-${index - 1}`)?.focus()
    }
  }

  const resendOTP = async () => {
    if (countdown > 0) return
    
    setError(null)
    setIsResending(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess('OTP resent successfully!')
      setCountdown(30)
    } catch (err) {
      setError('Failed to resend OTP')
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-4 sm:p-8 shadow-2xl w-full"
        >
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-poppins gradient-text">
                Paper Decor
              </span>
            </Link>
            
            {step === 'mobile' ? (
              <>
                <h2 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
                  Welcome Back!
                </h2>
                <p className="text-gray-600">Enter your mobile number to continue</p>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setStep('mobile')}
                  className="flex items-center text-primary-600 hover:text-primary-700 mb-4 mx-auto"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to mobile number
                </button>
                <h2 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
                  Enter OTP
                </h2>
                <p className="text-gray-600">
                  We sent a 6-digit code to <br />
                  <span className="font-medium text-gray-800">{mobileNumber}</span>
                </p>
              </>
            )}
          </div>

          {/* Error/Success Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="alert-error mb-4"
            >
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </motion.div>
          )}
          
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="alert-success mb-4"
            >
              <CheckCircle className="h-5 w-5" />
              <span>{success}</span>
            </motion.div>
          )}

          {/* Mobile Number Step */}
          {step === 'mobile' && (
            <form onSubmit={handleSubmit(sendOTP)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                    <span className="text-sm text-gray-500 mr-2">🇮🇳 +91</span>
                    <div className="w-px h-4 bg-gray-300"></div>
                  </div>
                  <input
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter a valid 10-digit mobile number'
                      }
                    })}
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    className={`input-field pl-20 ${errors.mobile ? 'input-error' : ''}`}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isResending}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isResending ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending OTP...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-5 w-5" />
                    <span>Send OTP</span>
                  </>
                )}
              </button>

              <div className="text-center text-sm text-gray-500">
                You'll receive OTP on both SMS and WhatsApp
              </div>
            </form>
          )}

          {/* OTP Verification Step */}
          {step === 'otp' && (
            <form onSubmit={handleSubmit(verifyOTP)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                  Enter 6-digit OTP
                </label>
                <div className="flex justify-center gap-1 sm:gap-2 px-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      {...register(`otp${index + 1}`, {
                        required: true,
                        pattern: /^\d$/
                      })}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center text-base sm:text-lg font-semibold border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      onInput={(e) => handleOTPInput(index, e.target.value, e)}
                      onKeyDown={(e) => handleOTPInput(index, e.target.value, e)}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Verify & Login</span>
                  </>
                )}
              </button>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Didn't receive OTP?</p>
                {countdown > 0 ? (
                  <p className="text-sm text-gray-500">
                    Resend OTP in {countdown} seconds
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={resendOTP}
                    disabled={isResending}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 disabled:opacity-50 flex items-center gap-1 mx-auto"
                  >
                    {isResending ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4" />
                    )}
                    Resend OTP
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              New to Paper Decor?{' '}
              <Link to="/register" className="font-medium text-primary-600 hover:text-primary-700">
                Create account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoginPage
