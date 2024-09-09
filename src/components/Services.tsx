import { ReactNode } from "react";

import { servicesQuery, myServicesQuery } from "@/queries/ServicesQuery"
import { Heading1, Heading2 } from "./ui/headings"
import { Card, CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface ICardProps {
  id?: number,
  serviceName: string,
  description: string,
  rate: number,
  actions: ReactNode;
}


function CWCard({ id, serviceName, description, rate, actions }: ICardProps) {
  return (
    <Card className="w-10/12">
      <CardContent className="p-2">
        <div className="flex flex-row gap-4 items-center">
          <div>
            <img src={`https://picsum.photos/80/80?id=${id}`} />
          </div>
          <div className="flex-grow">
            <p>{ serviceName }</p>
            <p>{ description }</p>
            <p>${ formatCurrency(rate) }</p>
          </div>
          <div className="flex flex-row gap-4">
            { actions }
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  const servicesQ = servicesQuery('services', 1, 5);
  const myServicesQ = servicesQuery('my_services', 1, 5);

  if (servicesQ.isFetched) {
    console.log(servicesQ.data);
  }

  return (<>
    <Heading1 text="Services" />
    <Heading2 text="Cubework Services Offered" className="mb-4" />
    {servicesQ.isFetching && (<>Loading...</>)}
    {(servicesQ.isError || servicesQ.isLoadingError) && (
      <div>Error fetching data</div>
    )}
    {servicesQ.isFetched && servicesQ.data?.data?.map(i => (
      <div
        className="mb-0"
        key={ i.id }
      >
        <CWCard
          id={ i.id }
          serviceName={ i.service_name }
          description={ i.description }
          rate={ i.rate }
          actions={
            <Button variant="outline">Checkout</Button>
          }
        />

      </div>
    ))}

    <Heading2 text="My Services" className="mb-4" />
    {myServicesQ.isFetching && (<>Loading...</>)}
    {(myServicesQ.isError || myServicesQ.isLoadingError) && (
      <div>Error fetching data</div>
    )}
    {myServicesQ.isFetched && myServicesQ.data?.data?.map(i => (
      <div
        className="mb-0"
        key={ i.id }
      >
        <CWCard
          id={ i.id }
          serviceName={ i.service_name }
          description={ i.description }
          rate={ i.rate }
          actions={<>
            <Button variant="outline">Checkout</Button>
            <Button
              variant="outline"
              onClick={() => alert(i.id + ':' + i.service_name)}
            >Reschedule</Button>
          </>}
        />

      </div>
    ))}
  </>)
}
