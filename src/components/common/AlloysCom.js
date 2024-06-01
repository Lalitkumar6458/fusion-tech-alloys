import React from 'react'
import Application from './Application';
import SupplierCities from './SupplierCities';
import SupplierCountries from './SupplierCountries';

const AlloysCom = ({data}) => {
    const SpecificationsKey = Object.keys(data.Specifications);
// const GradeKey = Object.keys(GradeData.gardeData);
  return (
    <div>
    <h2 className='text-[1.4rem] md:text-[1.6rem] font-Roboto font-semibold text-thmBlack'>{data.mainHeading}</h2>

    <div className=''>
    <p className="text-[1rem] md:text-[1rem] font-poppins font-normal my-5">
    {data.text1}
  </p>
  <p className="text-[1rem] md:text-[1rem] font-poppins font-normal my-5">
  {data.text2}
</p>
    </div>

    <div className=" border-b border-gray-500">
    <h3 className="text-[1.6rem] md:text-[1.9rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-thmBlack">
      Specifications - { data.name }
    </h3>
  </div>
<div className='mt-3'>

<div className="overflow-auto">
            <table className="border border-collapse w-full">
              <thead>
                <tr className="bg-gray-600 text-white">
                  <th className="w-[20%] text-center border text-[1rem] md:text-[1.2rem] font-Roboto rounded-l">
                    {data.name }
                  </th>
                  <th className="w-[80%] text-center border text-[1rem] md:text-[1.2rem] font-Roboto rounded-r">
                    Specifications
                  </th>
                </tr>
              </thead>
              <tbody>
                {SpecificationsKey.map((item) => {
                  return (
                    <tr className=" even:bg-slate-200">
                      <td className="w-[20%] text-center border font-oswald text-[1rem] md:text-[1rem] py-1 font-medium">
                        {item}
                      </td>
                      <td className="w-[80%] text-center border font-medium font-inter text-[1rem] md:text-[1rem] py-1">
                        {data.Specifications[item]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>  
</div>


<div className=" border-b border-gray-500 mt-8">
<h3 className="text-[1.6rem] md:text-[1.9rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-thmBlack">
Chemical Compostion - { data.name }
</h3>
</div>

<div className='mt-3'>

<div className="overflow-auto">
            <table className="border border-collapse w-full">
              <thead>
                <tr className="bg-gray-600 text-white">
                  <th className="w-[20%] text-center border text-[1rem] md:text-[1.2rem] font-Roboto rounded-l">
                    {data.name }
                  </th>
                  <th className="w-[80%] text-center border text-[1rem] md:text-[1.2rem] font-Roboto rounded-r">
                  Element (% By Mass)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.chemical.map((item) => {
                  return (
                    <tr className=" even:bg-slate-200">
                      <td className="w-[20%] text-center border font-oswald text-[1rem] md:text-[1rem] py-1 font-medium">
                        {item.name}
                      </td>
                      <td className="w-[80%] text-center border font-medium font-inter text-[1rem] md:text-[1rem] py-1">
                        {item.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>  
</div>


<div className=" border-b border-gray-500 mt-8">
<h3 className="text-[1.6rem] md:text-[1.9rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-thmBlack">
Mechanical Properties - { data.name }
</h3>
</div>

<div className='mt-3'>

<div className="overflow-auto">
            <table className="border border-collapse w-full">
              <tbody>
                {data.mechanical.map((item) => {
                  return (
                    <tr className=" even:bg-slate-200">
                      <td className="w-[20%] text-center border font-oswald text-[1rem] md:text-[1rem] py-1 font-medium">
                        {item.name}
                      </td>
                      <td className="w-[80%] text-center border font-medium font-inter text-[1rem] md:text-[1rem] py-1">
                        {item.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>  
</div>
<Application name={data.name} />
<SupplierCities name={data.name} />
<SupplierCountries name={data.name} />
    </div>
  )
}

export default AlloysCom