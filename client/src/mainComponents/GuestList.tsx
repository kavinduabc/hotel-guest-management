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
import { getGuest } from "@/Api/ApiFunctions"
import { useNavigate } from "react-router-dom"

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
        setGuests(data as Guest[])
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

  return (
    <div className="p-4">
      {/* Table wrapper with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <Table className="min-w-[600px]">
          <TableCaption>List of all guests.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell w-[100px]">Id</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead className="hidden md:table-cell">Address</TableHead>
              <TableHead className="hidden md:table-cell">Birth Date</TableHead>
              <TableHead className="hidden md:table-cell">Action</TableHead>
              <TableHead className="md:hidden">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell className="hidden md:table-cell font-medium">{guest.id}</TableCell>
                <TableCell>{guest.first_name || "-"}</TableCell>
                <TableCell>{guest.last_name || "-"}</TableCell>
                <TableCell>{guest.email || "-"}</TableCell>
                <TableCell>{guest.phone || "-"}</TableCell>
                <TableCell className="hidden md:table-cell">{guest.address || "-"}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {guest.date_of_birth
                    ? new Date(guest.date_of_birth).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell className="hidden md:table-cell flex gap-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate(`/update-guest/${guest.id}`)}
                  >
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </TableCell>

                
                <TableCell className="md:hidden flex gap-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate(`/update-guest/${guest.id}`)}
                  >
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
