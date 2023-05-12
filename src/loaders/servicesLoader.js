export const serviceLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/services/${params.id}`);
  return res.json();
};
