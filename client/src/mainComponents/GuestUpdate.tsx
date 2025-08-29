import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { updateGuest, getGuestById } from "@/Api/ApiFunctions"
import { useParams, useNavigate } from "react-router-dom"

export default function UpdateGuestForm() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  })

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    if (!id) return

    const fetchGuest = async () => {
      try {
        const guest = await getGuestById(id)
        setForm({
          first_name: guest.first_name || "",
          last_name: guest.last_name || "",
          email: guest.email || "",
          phone: guest.phone || "",
          address: guest.address || "",
          date_of_birth: guest.date_of_birth
            ? guest.date_of_birth.split("T")[0]
            : "",
        })
      } catch (err) {
        console.error("Error loading guest:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGuest()
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateGuest(id!, form) 
      alert("Guest updated successfully!")
      navigate("/guest-list") 
    } catch (err) {
      console.error(err)
      alert("Error updating guest. Check console.")
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Update Guest
        </h3>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid w-full gap-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              id="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              type="text"
              id="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="date_of_birth">Birth Day</Label>
            <Input
              type="date"
              id="date_of_birth"
              value={form.date_of_birth}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Update Guest
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
