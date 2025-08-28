

/** add guest form 8/28/2025 */

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const AddGuestForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add Guest
        </h3>
        <form className="space-y-5">
          
          <div className="grid w-full gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="Enter First Name" />
          </div>

          
          <div className="grid w-full gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" placeholder="Enter Last Name" />
          </div>

          
          <div className="grid w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter Email" />
          </div>

         
          <div className="grid w-full gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input type="text" id="phone" placeholder="Enter Phone Number" />
          </div>

          
          <div className="grid w-full gap-2">
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" placeholder="Enter Address" />
          </div>

          
          <div className="grid w-full gap-2">
            <Label htmlFor="dob">Birth Day</Label>
            <Input type="date" id="dob" />
          </div>

          
          <div className="pt-4">
            <Button className="w-full">Add Guest</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddGuestForm
