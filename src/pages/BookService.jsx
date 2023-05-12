import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context-provider/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { users } = useContext(AuthContext);
  console.log(users);
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = users?.email;
    const price = form.amount.value;
    const date = form.date.value;
    const order = {
      customerName: name,
      email,
      price,
      serviceId: service._id,
      date,
      img: service.img,
      serviceTitle: service.title,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId && alert("Service booked successfully");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Book now {service.title}</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form
            onSubmit={handleBook}
            className="card-body lg:grid grid-cols-2 gap-x-6 gap-y-8"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={users?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                defaultValue={`$${service.price}`}
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6 col-span-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
