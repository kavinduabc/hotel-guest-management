/** add guest form 8/28/2025 */
//** update the guest added form  */

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { createGuest } from "@/Api/ApiFunctions"

const AddGuestForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createGuest(form);
      alert("Guest added successfully!");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        date_of_birth: "",
      });
    } catch (err) {
      alert("Error adding guest. Check console.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add Guest
        </h3>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid w-full gap-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              id="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Enter First Name"
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
              placeholder="Enter Last Name"
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
              placeholder="Enter Email"
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
              placeholder="Enter Phone Number"
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
              placeholder="Enter Address"
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
              Add Guest
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuestForm;
