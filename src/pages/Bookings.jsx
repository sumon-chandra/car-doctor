import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context-provider/AuthProvider";
import { FaRegTrashAlt } from "react-icons/fa";

const Bookings = () => {
  const { users, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const demoImg = "https://i.ibb.co/rvB3cBJ/car-mechanics-2.jpg";

  const url = `http://localhost:5000/bookings?email=${users?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingServices = bookings.filter(
              (service) => service._id !== id
            );
            setBookings(remainingServices);
          }
        });
    }
  };
  return loading ? (
    <p className="text-7xl font-bold pt-32 text-center">Loading ...</p>
  ) : (
    <div className="pt-20 lg:px-36 px-4">
      <h3 className="py-6 text-2xl font-bold text-center text-main">
        Your Booking list
      </h3>
      <div className="">
        {bookings.map((service) => (
          <div
            className="bg-slate-100 p-4 rounded-lg shadow-lg mb-4 flex justify-between items-center w-4/6 mx-auto"
            key={service._id}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleDelete(service._id)}
                className="btn btn-sm shadow-lg w-10 h-10 text-lg p-1 rounded-full"
              >
                <FaRegTrashAlt />
              </button>
              <img
                src={service.img || demoImg}
                alt=""
                className="w-36 rounded-xl"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">{service.serviceTitle}</p>
              <p className="font-bold ">{service.price}</p>
            </div>
            <p>{service.date}</p>
            <button className="btn btn-sm bg-main text-white normal-case font-semibold shadow-md border-0 hover:bg-main">
              Pending
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
