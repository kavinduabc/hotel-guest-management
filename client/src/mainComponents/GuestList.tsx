// ** Guest list component 8/28/2025 */

import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getGuest } from '@/Api/ApiFunctions'

interface Guest {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  date_of_birth: string
}

const GuestList = () => {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const data = await getGuest()
        console.log(data)
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
    return <p>Loading guests...</p>
  }

  return (
    <div>
      <Table>
        <TableCaption>List of all guests.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Birth Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest.id}>
              <TableCell className="font-medium">{guest.id}</TableCell>
              <TableCell>{guest.first_name || '-'}</TableCell>
              <TableCell>{guest.last_name || '-'}</TableCell>
              <TableCell>{guest.email || '-'}</TableCell>
              <TableCell>{guest.phone || '-'}</TableCell>
              <TableCell>{guest.address || '-'}</TableCell>
              <TableCell>
                {guest.date_of_birth
                  ? new Date(guest.date_of_birth).toLocaleDateString()
                  : '-'}
              </TableCell>
              <TableCell>
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default GuestList
