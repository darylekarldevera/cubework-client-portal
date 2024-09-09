import { ServicesQuery } from "@/queries/ServicesQuery"
import { Heading1, Heading2 } from "./ui/headings"

export default function Services() {
  const servicesQuery = ServicesQuery(20, 20);

  if (servicesQuery.isFetched) {
    console.log(servicesQuery.data);
  }

  return (<>
    <Heading1 text="Services" />
    <Heading2 text="Cubework Services Offered" />
    {servicesQuery.isFetched && servicesQuery.data?.data?.map(i => (
      <div className="mb-4">
        { i.id }: { i.service_name }
        <p>{ i.description }</p>
      </div>
    ))}
  </>)
}
