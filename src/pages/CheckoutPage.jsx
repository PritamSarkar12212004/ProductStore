import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { 
  User, 
  AtSign, 
  MapPin, 
  Phone, 
  CreditCard, 
  Shield, 
  Truck,
  ArrowLeft,
  Check,
  Calendar,
  Lock
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const navigate = useNavigate()
  const { cart, getCartTotal, clearCart } = useCart()
  const { user } = useAuth()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [orderComplete, setOrderComplete] = useState(false)

  const subtotal = getCartTotal()
  const tax = subtotal * 0.08
  const shipping = subtotal > 50 ? 0 : 8.99
  const total = subtotal + tax + shipping

  const onSubmit = async (data) => {
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Clear cart and show success
    clearCart()
    setOrderComplete(true)
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/orders')
    }, 3000)
  }

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="page-container">
        <div className="container-responsive py-16">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-16 w-16 text-gray-400" />
              </div>
              <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Add some items to your cart before proceeding to checkout.
              </p>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="page-container">
        <div className="container-responsive py-16">
          <motion.div 
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <Check className="h-12 w-12 text-green-600" />
            </motion.div>
            <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-4">
              Order Complete!
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for your order. You'll receive a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <Link to="/orders" className="btn-primary w-full">
                View My Orders
              </Link>
              <Link to="/" className="btn-outline w-full">
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="container-responsive py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold font-poppins text-gray-800">
            Checkout
          </h1>
          <p className="text-gray-600 mt-2">
            Complete your order and get ready to decorate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="card p-6">
                <h2 className="text-xl font-bold font-poppins mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary-600" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      {...register('firstName', { required: 'First name is required' })} 
                      type="text"
                      defaultValue={user?.name?.split(' ')[0] || ''}
                      className={`input-field ${errors.firstName ? 'input-error' : ''}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      {...register('lastName', { required: 'Last name is required' })} 
                      type="text"
                      defaultValue={user?.name?.split(' ')[1] || ''}
                      className={`input-field ${errors.lastName ? 'input-error' : ''}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })} 
                      type="email"
                      defaultValue={user?.email || ''}
                      className={`input-field ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      {...register('phone', { required: 'Phone number is required' })} 
                      type="tel"
                      className={`input-field ${errors.phone ? 'input-error' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="card p-6">
                <h2 className="text-xl font-bold font-poppins mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary-600" />
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input 
                      {...register('address', { required: 'Address is required' })} 
                      type="text"
                      className={`input-field ${errors.address ? 'input-error' : ''}`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input 
                        {...register('city', { required: 'City is required' })} 
                        type="text"
                        className={`input-field ${errors.city ? 'input-error' : ''}`}
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input 
                        {...register('state', { required: 'State is required' })} 
                        type="text"
                        className={`input-field ${errors.state ? 'input-error' : ''}`}
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <input 
                        {...register('zipCode', { required: 'ZIP code is required' })} 
                        type="text"
                        className={`input-field ${errors.zipCode ? 'input-error' : ''}`}
                      />
                      {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="card p-6">
                <h2 className="text-xl font-bold font-poppins mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary-600" />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                        paymentMethod === 'card' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                        paymentMethod === 'paypal' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <span className="text-blue-600 font-bold">PayPal</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('apple')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                        paymentMethod === 'apple' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <span className="font-bold">🍎 Pay</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input 
                          {...register('cardNumber', { required: 'Card number is required' })} 
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className={`input-field ${errors.cardNumber ? 'input-error' : ''}`}
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input 
                            {...register('expiryDate', { required: 'Expiry date is required' })} 
                            type="text"
                            placeholder="MM/YY"
                            className={`input-field ${errors.expiryDate ? 'input-error' : ''}`}
                          />
                          {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVC
                          </label>
                          <input 
                            {...register('cvc', { required: 'CVC is required' })} 
                            type="text"
                            placeholder="123"
                            className={`input-field ${errors.cvc ? 'input-error' : ''}`}
                          />
                          {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc.message}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Place Order Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    <span>Place Order - ${total.toFixed(2)}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold font-poppins mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-gray-800 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                        <span className="font-medium text-primary-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-700">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Secure Checkout</span>
                </div>
                <p className="text-xs text-green-600 mt-1">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
