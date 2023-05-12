import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ServiceDetails from "../pages/ServiceDetails";
import BookService from "../pages/BookService";

// Loaders
import { serviceLoader } from "../loaders/servicesLoader";
import Bookings from "../pages/Bookings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route
        path="services/:id"
        element={<ServiceDetails />}
        loader={serviceLoader}
      />
      <Route path="book/:id" element={<BookService />} loader={serviceLoader} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
    </Route>
  )
);
export default router;
