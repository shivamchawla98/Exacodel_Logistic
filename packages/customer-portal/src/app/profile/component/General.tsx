'use client'

import GET_USER_BY_ID from "@/graphql/query/getUserById"
import { useQuery } from "@apollo/client"
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

// Map the enum values to human-readable items
const companyTypeMap: any = {
  Partnership: "Partnership",
  private_limited: "Private Limited",
  public_limited: "Public Limited",
  limited_liability_partnership: "Limited Liability Partnership",
  Non_profit_cooperation: "Non-Profit Cooperation",
  Inc: "Inc",
  Cooperation: "Cooperation",
  LLC: "Limited Liability Company",
};

const annualTurnoverMap: any = {
  UP_TO_10000: 'Up to $10,000',
  FROM_10000_TO_50000: '$10,000 to $50,000',
  FROM_50000_TO_100000: '$50,000 to $100,000',
  FROM_100000_TO_500000: '$100,000 to $500,000',
  FROM_500000_TO_1000000: '$500,000 to $1,000,000',
  FROM_1000000_TO_1500000: '$1,000,000 to $1,500,000',
  FROM_1500000_TO_2500000: '$1,500,000 to $2,500,000',
  FROM_2500000_TO_5000000: '$2,500,000 to $5,000,000',
  FROM_5000000_TO_10000000: '$5,000,000 to $10,000,000',
  ABOVE_10000000: 'Above $10,000,000',
};

// Map the enum values to human-readable items
const industryTypeMap: any = {
  Apparels_and_garments: 'Apparels and Garments',
  Building_and_Construction: 'Building and Construction',
  Electronic_and_Electrical: 'Electronic and Electrical',
  Drugs_and_pharms: 'Drugs and Pharmaceuticals',
  Industrial_Machines: 'Industrial Machines',
  Industrial_suppplies: 'Industrial Supplies',
  Food_and_Beverages: 'Food and Beverages',
  Hospital_and_Medicalsupplies: 'Hospital and Medical Supplies',
};
function General() {
  const token: any = Cookies.get("jwToken");
  console.log("Token ", token);
  const decodedToken: any = jwtDecode(token)
  const [userID, setUserID] = useState<number>(token ? decodedToken.id * 1 : -1);
  
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userID,
    },
  });

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (!loading && data && data.getUserById) {
      const user = data?.getUserById;
      if (user) {
        setFormData({
          'Company Name': user.companyName,
          'GST Number': user.gst_no,
          'Full name': user.first_name + ' ' + user.last_name,
          'Email address': user.email,
          'Annual Turn Over': annualTurnoverMap[user.annualTurnover] || user.annualTurnover,
          'User Type': user.userType,
          'Type of Company': companyTypeMap[user.companyType] || user.companyType,
          'Industry': industryTypeMap[user.industryType] || user.industryType,
          'State': user.state,
          'Pincode': user.pincode,
          'Address': user.Adress,
          'City': user.city,
          'Country': user.country,
          'Company Registration Number': user.company_reg_no,
          'Company Pan Number': user.company_pan_no,
          'Designation': user.Designation,
          'Contact Number': user.mobile,
          'Website': user.website,
        });
      }
    }
  },[userID, loading, data]);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
          <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
          <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
        </div>
      </>
    );
  }

  if (error) {
    console.log(error);

    return <p>Error encountered : (</p>;
  }


  return (
    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-12 lg:py-8 ">
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            All general information of your profile
          </p>

          { Object.entries(formData).map(([label, value]: any) => (
          <dl key={value} className="mt-4 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div className="pt-4 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">{label}</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900"> {value} </div>
              <button type="button" className="font-semibold text-sky-600 hover:text-sky-500">
                Update
              </button>
            </dd>
          </div>
        </dl>
          ))
         }

        </div>
      </div>
    </main>
  )
}

export default General