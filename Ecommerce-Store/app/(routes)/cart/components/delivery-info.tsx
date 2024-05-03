import React, { useState } from "react";

import { CartContext } from "./cart-context";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  floor: string;
  buildingName: string;
  streetAddress: string;
  city: string;
  state: string;
  pincode: string;
};

type DeliveryFormProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const DeliveryForm: React.FC<DeliveryFormProps> = ({
  formData,
  setFormData,
}) => {
  const { totalPrice } = React.useContext(CartContext);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col ">
      <h1 className=" items-center text-center font-bold text-xl pb-6">
        Please Fill the Information Carefully !
      </h1>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="w-1/2 h-10 items-center text-center"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="w-1/2 h-10 items-center text-center"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="tel"
        className="w-1/2 h-10 items-center text-center mt-4 mx-auto"
        placeholder="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <label className="items-center  mt-4 mx-auto">
        - - - - - - - -Address Information- - - - - - - -
      </label>
      <input
        type="text"
        className="w-full h-10  mt-4 text-center "
        placeholder="Floor/Building Name"
        name="floor"
        value={formData.floor}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="streetAddress"
        className="w-full h-10 mt-4 text-center"
        placeholder="Street Address"
        value={formData.streetAddress}
        onChange={handleChange}
        required
      />
      <div className="flex flex-row gap-4 h-10 mt-4">
        <input
          type="text"
          placeholder="City"
          name="city"
          className="w-1/2 text-center"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="w-1/2 text-center"
          placeholder="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>
      <select
        name="state"
        value={formData.state}
        className="w-1/2 h-10 items-center text-center mt-4 mb-6 mx-auto"
        onChange={handleChange}
        required
      >
        <option value="">Select a state</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">
          Andaman and Nicobar Islands
        </option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">
          Dadra and Nagar Haveli and Daman and Diu
        </option>
        <option value="The Government of NCT of Delhi">Delhi</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Ladakh">Ladakh</option>
      </select>
    </form>
  );
};

export default DeliveryForm;
