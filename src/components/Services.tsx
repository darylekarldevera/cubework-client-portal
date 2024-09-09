import { ReactNode } from "react";

import { servicesQuery } from "@/queries/ServicesQuery"
import { Heading1, Heading2 } from "./ui/headings"
import { Card, CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "./DatePicker";


interface ICardProps {
  id?: number,
  serviceName: string,
  description: string,
  rate: number,
  actions: ReactNode;
}

function CWForm() {
  return (
    <div className="py-4">
      <hr />
      <div className="px-8 py-4 flex flex-row items-center justify-end gap-1">
        <Checkbox id="apply-promo" />
        <label htmlFor="apply-promo">Apply promo balance: $100.00</label>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-8">
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <div>
              <img
                src="/26016-3-major-credit-card-logo-clipart.png"
                width="200"
              />
            </div>
            <div><strong>Add card details</strong></div>
            <div>
              <Label htmlFor="card-number">Card number</Label>
              <Input name="card-number" type="text" />
            </div>
            <div>
              <Label htmlFor="card-holder-name">Card Holder Name</Label>
              <Input name="card-holder-name" type="text" />
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <Label htmlFor="expiry-date">Expiry date</Label>
                <Input name="expiry-date" type="text" />
              </div>
              <div>
                <Label htmlFor="ccv">CVC</Label>
                <Input name="cvc" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100 p-4">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>Hours</div>
              <div>Date</div>

              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick hour range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="2-3">2:00 PM - 3:00 PM</SelectItem>
                    <SelectItem value="3-4">3:00 PM - 4:00 PM</SelectItem>
                    <SelectItem value="4-5">4:00 PM - 5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div><DatePicker /></div>

              <div>Summary</div>
              <div>8/21/2024<br />1 hour (2:00 PM)</div>

              <div>Promo Code</div>
              <div><Input type="text" /></div>

              <div>Amount</div>
              <div>$1000.00</div>

              <div>Total Amount</div>
              <div>$1200.00</div>
            </div>
            <div>
              <Button
                className="w-full bg-blue-600 text-white"
                variant="default"
              >Pay Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CWCard({ id, serviceName, description, rate, actions }: ICardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-0">
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
                  <AccordionTrigger>
                  </AccordionTrigger>
                </div>
              </div>
            <AccordionContent>
              <CWForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
