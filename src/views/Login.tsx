import { KeyboardEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify({password}),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = response.json()
      
      if (response.status === 200) {
        // and populate context
        navigate('/cash/in')
      }
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <input
        type="password"
        className="w-48 rounded-lg py-1 text-center outline-none"
        autoFocus
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        onKeyDown={login}
      />
    </div>
  )
}
