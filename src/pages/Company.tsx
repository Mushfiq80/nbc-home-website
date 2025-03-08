import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function NBCRegistration() {
  const [formData, setFormData] = useState({
    companyName: "",
    tagLine: "",
    email: "",
    username: "",
    phone: "",
    altPhone: "",
    description: "",
    division: "",
    district: "",
    union: "",
    thana: "",
    postCode: "",
    address: "",
    contactName: "",
    designation: "",
    contactEmail: "",
    contactPhone: "",
    contactAddress: "",
    companyLogo: null,
    tradeLicense: null,
    companyDocuments: null,
    agree: false,
  });

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
  }

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files ? files[0] : null });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      <div className="p-6 flex flex-col md:flex-row gap-6">
        {/* Left Form Section */}
        <div className="w-full md:w-2/3">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="companyName"
                  placeholder="Company Name"
                  onChange={handleChange}
                />
                <Input
                  name="tagLine"
                  placeholder="Tag Line"
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <Input
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Phone No"
                  onChange={handleChange}
                />
                <Input
                  name="altPhone"
                  placeholder="Alternative Phone No"
                  onChange={handleChange}
                />
                <Input
                  name="description"
                  placeholder="Short Description"
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent>
              <h2 className="text-lg font-semibold">Company Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="division"
                  placeholder="Select Division"
                  onChange={handleChange}
                />
                <Input
                  name="thana"
                  placeholder="Enter Thana"
                  onChange={handleChange}
                />
                <Input
                  name="district"
                  placeholder="Select District"
                  onChange={handleChange}
                />
                <Input
                  name="postCode"
                  placeholder="Enter Zip Code"
                  onChange={handleChange}
                />
                <Input
                  name="union"
                  placeholder="Select Union/Thana"
                  onChange={handleChange}
                />
                <Input
                  name="address"
                  placeholder="Enter House No / Village"
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent>
              <h2 className="text-lg font-semibold">
                Contact Person Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="contactName"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <Input
                  name="designation"
                  placeholder="Designation"
                  onChange={handleChange}
                />
                <Input
                  name="contactEmail"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Input
                  name="contactPhone"
                  placeholder="Phone No"
                  onChange={handleChange}
                />
                <Input
                  name="contactAddress"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Process Section */}
        <div className="w-full md:w-1/3 bg-green-500 p-4 rounded-xl text-white">
          <h2 className="text-xl font-bold">Process</h2>
          <p>Submit the form with all information.</p>
          <Button className="mt-2">Submit</Button>
        </div>

      </div>
        {/* Footer Actions */}
      <div className="my-10">
        <div className="w-full flex justify-between items-center mt-4">
          <Checkbox
            name="agree"
            onCheckedChange={(checked: boolean) =>
              setFormData({ ...formData, agree: checked })
            }
          />{" "}
          I agree with terms & conditions
          <div>
            <Button variant="destructive">Cancel</Button>
            <Button variant="default" className="ml-2">
              Register Publisher
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
