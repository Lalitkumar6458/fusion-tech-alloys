import React from 'react'
import { CountriesData } from '../../../public/ContactData';

const SupplierCountries = ({ name }) => {
      const chunkedCities = [];

      // Split the listData into chunks of size 6
      for (let i = 0; i < CountriesData.listData.length; i += 4) {
        chunkedCities.push(CountriesData.listData.slice(i, i + 4));
      }
  return (
    <div className="mt-[40px] mb-[40px]">
      <div className=" border-b border-gray-500">
        <h3 className="text-[1.6rem] md:text-[2rem] font-Roboto font-semibold border-b-2 border-mainRed w-fit text-dark-cl">
          Exporting {name} to Below Countries
        </h3>
      </div>

      <p className=" font-poppins text-[1.1rem] mt-8">{CountriesData.text(name)}</p>
      <div className=" overflow-auto hidden">
        <table className="border-collapse border w-full mt-9">
          <thead>
            <tr>
              <th
                colSpan="6"
                className="py-2 bg-gray-600 text-white text-center"
              >
                Countries We Export
              </th>
            </tr>
          </thead>
          <tbody>
            {chunkedCities.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
              >
                {row.map((city, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="border p-2 font-poppins text-[1rem] font-medium"
                  >
                    {city}
                  </td>
                ))}
                {/* Fill the row with empty cells if needed */}
                {row.length < 4 &&
                  Array.from({ length: 4 - row.length }).map(
                    (_, emptyIndex) => (
                      <td
                        key={`empty-${emptyIndex}`}
                        className="border p-2 font-poppins"
                      ></td>
                    )
                  )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierCountries;