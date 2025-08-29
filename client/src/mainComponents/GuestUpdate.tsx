import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { updateGuest, getGuestById } from "@/Api/ApiFunctions"
import { useParams, useNavigate } from "react-router-dom"
import { AlertDemo } from "@/Alert/AlertDemo"

// Validation function
const validateGuestForm = (form: any) => {
  const errors: any = {}
  if (!form.first_name.trim()) errors.first_name = "First name is required"
  if (!form.last_name.trim()) errors.last_name = "Last name is required"

  if (!form.email.trim()) errors.email = "Email is required"
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Invalid email format"

  if (!form.phone.trim()) errors.phone = "Phone number is required"
  else if (!/^[0-9]{10}$/.test(form.phone)) errors.phone = "Phone number must be exactly 10 digits"
  else if (!form.phone.startsWith("0")) errors.phone = "Phone number must start with 0"

  if (!form.address.trim()) errors.address = "Address is required"

  return errors
}

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

  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const [alert, setAlert] = useState<{
    title: string
    description?: string
    type: "success" | "error" | "info"
  } | null>(null)

  useEffect(() => {
    if (!id) return
    setAlert({ title: "Loading guest...", description: "Please wait while we fetch the guest details.", type: "info" })

    const fetchGuest = async () => {
      try {
        const guest = await getGuestById(id)
        setForm({
          first_name: guest.first_name || "",
          last_name: guest.last_name || "",
          email: guest.email || "",
          phone: guest.phone || "",
          address: guest.address || "",
          date_of_birth: guest.date_of_birth || "",
        })
        setAlert(null)
      } catch (err) {
        console.error("Error loading guest:", err)
        setAlert({ title: "Failed to load guest", description: "Please try again later.", type: "error" })
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
    if (!id) return

    const validationErrors = validateGuestForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    try {
      await updateGuest(id, form)
      setAlert({ title: "Guest updated successfully!", description: "The guest details were saved.", type: "success" })
      setTimeout(() => navigate("/guest-list"), 1500)
    } catch (err) {
      console.error(err)
      setAlert({ title: "Error updating guest", description: "Something went wrong. Check console.", type: "error" })
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Update Guest</h2>
          <p className="text-gray-500 mt-1 text-sm md:text-base">Modify the details of the guest below.</p>
        </div>

        {alert && (
          <div className="mb-4">
            <AlertDemo alertTitle={alert.title} alertDescription={alert.description} type={alert.type} onClose={() => setAlert(null)} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          <div className="flex flex-col gap-1 md:gap-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input type="text" id="first_name" value={form.first_name} onChange={handleChange} />
            {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input type="text" id="last_name" value={form.last_name} onChange={handleChange} />
            {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" value={form.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input type="text" id="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="flex flex-col gap-1 md:gap-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" value={form.address} onChange={handleChange} />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <Label htmlFor="date_of_birth">Birth Day</Label>
            <Input type="date" id="date_of_birth" value={form.date_of_birth} onChange={handleChange} />
          </div>

          <div className="md:col-span-2 pt-3 md:pt-4 flex justify-center">
            <Button
              type="submit"
              className="w-[180px] md:w-[200px] py-2 md:py-3 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              disabled={submitting}
            >
              {submitting ? "Updating Guest..." : "Update Guest"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
