import React from "react";

const Card = ({ data }) => {
  if (!data) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div>
      {data.map((elem, idx) => (
        <div
          key={idx}
          className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex p-4"
        >
          <div className="w-1/2 shadow-xl flex items-center justify-center bg-[#B1F0F7] rounded-lg">
            <img
              src={elem.picture.large}
              alt="profile img"
              className="rounded-lg"
            />
          </div>

          <div className="w-2/3 pl-4">
            <div className="flex justify-between mb-2">
              <div className="w-1/2 pr-2">
                <span className="block text-gray-600 text-sm font-bold">
                  First Name:
                </span>
                <span className="block text-gray-800">{elem.name.first}</span>
              </div>
              <div className="w-1/2 pl-2">
                <span className="block text-gray-600 text-sm font-bold">
                  Last Name:
                </span>
                <span className="block text-gray-800">{elem.name.last}</span>
              </div>
            </div>
            <div className="mb-2">
              <span className="block text-gray-600 text-sm font-bold">
                Gender:
              </span>
              <span className="block text-gray-800">{elem.gender}</span>
            </div>
            <div>
              <span className="block text-gray-600 text-sm font-bold">
                Phone Number:
              </span>
              <span className="block text-gray-800">{elem.phone}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
