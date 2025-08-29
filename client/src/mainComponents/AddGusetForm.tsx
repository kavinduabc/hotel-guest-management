import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { createGuest } from "@/Api/ApiFunctions"

export default function AddGuestForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
    setErrors({ ...errors, [e.target.id]: "" }) 
  }

  const validateForm = () => {
    let newErrors: Record<string, string> = {}

    if (!form.first_name.trim()) newErrors.first_name = "First name is required"
    if (!form.last_name.trim()) newErrors.last_name = "Last name is required"

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Invalid email format"
      }
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else {
      const phoneRegex = /^[0-9]{10}$/
      if (!phoneRegex.test(form.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits"
      } else if (form.phone[0] !== "0") {
        newErrors.phone = "Phone number must start with 0"
      }
    }

    if (!form.address.trim()) newErrors.address = "Address is required"

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    try {
      await createGuest(form)
      alert("Guest added successfully!")
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        date_of_birth: "",
      })
      setErrors({})
    } catch (err) {
      console.error(err)
      alert(" Error adding guest. Check console.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 p-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Add New Guest</h2>
          <p className="text-gray-500 mt-2">
            Please provide the guest information below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex flex-col gap-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              id="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First name"
            />
            {errors.first_name && (
              <p className="text-sm text-red-500">{errors.first_name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              type="text"
              id="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Last name"
            />
            {errors.last_name && (
              <p className="text-sm text-red-500">{errors.last_name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0712345678"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Main Street, Colombo"
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="date_of_birth">Birth Day</Label>
            <Input
              type="date"
              id="date_of_birth"
              value={form.date_of_birth}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <Button
              type="submit"
              className="w-[200px] py-3 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              disabled={loading}
            >
              {loading ? "Adding Guest..." : "Add Guest"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
