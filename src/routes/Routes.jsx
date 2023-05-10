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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
export default router;
