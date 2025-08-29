import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DeleteGuestById, getGuest } from "@/Api/ApiFunctions"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface Guest {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  date_of_birth: string
}

export default function GuestList() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const data = await getGuest()
        setGuests(data as unknown as Guest[])
      } catch (error) {
        console.error("Error fetching guests:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGuests()
  }, [])

  if (loading) {
    return <p className="text-center mt-4">Loading guests...</p>
  }

  // Delete guest function
  const GuestDelete = async (id: string) => {
    try {
      await DeleteGuestById(id)
      setGuests((prevGuests) => prevGuests.filter((guest) => guest.id !== id))
    } catch (error) {
      console.error("Error deleting guest:", error)
    }
  }

  return (
    <div className="p-6">
  <div className="bg-white rounded-2xl shadow-md p-4">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Guest List</h2>

    <div className="overflow-x-auto">
      <Table className="min-w-[600px] border rounded-lg">
        <TableCaption className="text-gray-500 text-sm">
          Manage and view all registered guests.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-semibold text-gray-700">First Name</TableHead>
            <TableHead className="font-semibold text-gray-700">Last Name</TableHead>
            <TableHead className="font-semibold text-gray-700">Email</TableHead>
            <TableHead className="font-semibold text-gray-700">Phone Number</TableHead>
            <TableHead className="hidden md:table-cell font-semibold text-gray-700">Address</TableHead>
            <TableHead className="hidden md:table-cell font-semibold text-gray-700">BirthDate</TableHead>
            <TableHead className="font-semibold text-gray-700 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {guests.map((guest, index) => (
            <TableRow
              key={guest.id}
              className={index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}
            >
              <TableCell className="font-medium text-gray-800">{guest.first_name || "-"}</TableCell>
              <TableCell>{guest.last_name || "-"}</TableCell>
              <TableCell className="text-gray-600">{guest.email || "-"}</TableCell>
              <TableCell>{guest.phone || "-"}</TableCell>
              <TableCell className="hidden md:table-cell">{guest.address || "-"}</TableCell>
              <TableCell className="hidden md:table-cell">
                {guest.date_of_birth
                  ? new Date(guest.date_of_birth).toLocaleDateString()
                  : "-"}
              </TableCell>

              {/* Action Buttons */}
              <TableCell className="flex justify-center gap-2">
                <Button
                  variant="default"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                  onClick={() => navigate(`/update-guest/${guest.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  onClick={() => GuestDelete(guest.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
</div>

  )
}
