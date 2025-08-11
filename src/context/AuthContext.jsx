import React, { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    const savedUser = localStorage.getItem('paperDecorUser')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('paperDecorUser')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data (in real app, this would come from API)
      const userData = {
        id: '1',
        name: 'John Doe',
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        isAdmin: email === 'admin@paperDecor.com'
      }
      
      setUser(userData)
      localStorage.setItem('paperDecorUser', JSON.stringify(userData))
      toast.success('Logged in successfully!')
      return { success: true }
    } catch (error) {
      toast.error('Login failed. Please try again.')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const register = async (name, email, password) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data (in real app, this would come from API)
      const userData = {
        id: Date.now().toString(),
        name: name,
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        isAdmin: false
      }
      
      setUser(userData)
      localStorage.setItem('paperDecorUser', JSON.stringify(userData))
      toast.success('Account created successfully!')
      return { success: true }
    } catch (error) {
      toast.error('Registration failed. Please try again.')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('paperDecorUser')
    toast.success('Logged out successfully!')
  }

  const loginWithGoogle = async () => {
    try {
      setLoading(true)
      // Simulate OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const userData = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google',
        isAdmin: false,
        provider: 'google'
      }
      
      setUser(userData)
      localStorage.setItem('paperDecorUser', JSON.stringify(userData))
      toast.success('Logged in with Google!')
      return { success: true }
    } catch (error) {
      toast.error('Google login failed. Please try again.')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const loginWithGitHub = async () => {
    try {
      setLoading(true)
      // Simulate OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const userData = {
        id: 'github_' + Date.now(),
        name: 'GitHub User',
        email: 'user@github.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=github',
        isAdmin: false,
        provider: 'github'
      }
      
      setUser(userData)
      localStorage.setItem('paperDecorUser', JSON.stringify(userData))
      toast.success('Logged in with GitHub!')
      return { success: true }
    } catch (error) {
      toast.error('GitHub login failed. Please try again.')
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    loginWithGoogle,
    loginWithGitHub,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
