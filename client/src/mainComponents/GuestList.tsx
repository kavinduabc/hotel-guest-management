
//** create the guest list component 8/28/2025 */

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const GuestList = () => {
  return (
    <div>
        <Table>
         <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Id</TableHead>
         <TableHead>First Name</TableHead>
         <TableHead>Last Name</TableHead>
         <TableHead>Email</TableHead>
         <TableHead>Phone Number</TableHead>
         <TableHead>Address</TableHead>
         <TableHead>Birth Date</TableHead>
         
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
    </div>
  )
}

export default GuestList