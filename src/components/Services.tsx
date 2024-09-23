import { ReactNode } from "react";

import { servicesQuery } from "@/queries/ServicesQuery"
import { Heading1 } from "./ui/headings"
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

interface CWFormProps {
  amount: number;
  totalAmount: number;
  promoBalance: number;
}

function CWForm({ amount, totalAmount, promoBalance }: CWFormProps) {
  return (
    <div className="py-4">
      <hr />
      <div className="px-8 py-4 flex flex-row items-center justify-end gap-1 text-[11px]">
        <Checkbox id="apply-promo" />
        <label htmlFor="apply-promo">Apply promo balance: ${formatCurrency(promoBalance)}</label>
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
            <div className="text-[11px]"><strong>Add card details</strong></div>
            <div>
              {/* TODO: Add validation */}
              <Label htmlFor="card-number" className="text-[11px]">Card number</Label>
              <Input name="card-number" type="text" pattern="\d{3}" className="text-[11px]" />
            </div>
            <div className="text-[11px]">
              {/* TODO: Add validation */}
              <Label htmlFor="card-holder-name" className="text-[11px]">Card Holder Name</Label>
              <Input name="card-holder-name" type="text" className="text-[11px]" />
            </div>
            <div className="flex flex-row gap-4">
              <div>
                {/* TODO: Add validation */}
                <Label htmlFor="expiry-date" className="text-[11px]">Expiry date</Label>
                <Input name="expiry-date" type="text" className="text-[11px]" />
              </div>
              <div>
                <Label htmlFor="ccv" className="text-[11px]">CVC</Label>
                <Input name="cvc" type="text" className="text-[11px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100 p-4 text-[11px]">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>Hours</div>
              <div>Date</div>

              <div>
                <Select>
                  <SelectTrigger className="w-[180px] text-[11px]">
                    <SelectValue placeholder="Pick hour range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-[11px]">
                    <SelectItem value="2-3">2:00 PM - 3:00 PM</SelectItem>
                    <SelectItem value="3-4">3:00 PM - 4:00 PM</SelectItem>
                    <SelectItem value="4-5">4:00 PM - 5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div><DatePicker className="text-[11px]" /></div>

              <div>Summary</div>
              <div>8/21/2024<br />1 hour (2:00 PM)</div>

              <div>Promo Code</div>
              <div><Input type="text" className="text-[11px]" /></div>

              <div>Amount</div>
              <div>${formatCurrency(amount)}</div>

              <div>Total Amount</div>
              <div>${formatCurrency(totalAmount)}</div>
            </div>
            <div>
              <Button
                className="w-full bg-blue-600 text-white text-[11px]"
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
    <Card className="w-full rounded-none text-[11px]">
      <CardContent className="p-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-0">
              <div className="flex flex-row gap-4 items-center">
                <div>
                  <img src={`https://picsum.photos/80/80?id=${id}`} />
                </div>
                <div className="flex-grow">
                  <p className="mb-1">{ serviceName }</p>
                  <p className="mb-1">{ description }</p>
                  <p>${ formatCurrency(rate) }</p>
                </div>
                <div className="flex flex-row gap-4">
                  { actions }
                  <AccordionTrigger>
                  </AccordionTrigger>
                </div>
              </div>
            <AccordionContent>
              <CWForm amount={1200.0} totalAmount={1200.0} promoBalance={100.0} />
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

  if (servicesQ.isSuccess) {
    console.log(servicesQ.data);
  }

  return (<>
      <Heading1 text="Services" />

      <p className="mb-4">Cubework Services Offered</p>

      {servicesQ.isFetching && (<>Loading...</>)}

      {(servicesQ.isError || servicesQ.isLoadingError) && (
        <div>Error fetching data</div>
      )}

      {servicesQ.isSuccess && servicesQ.data?.data?.map(i => (
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
              <Button variant="outline" className="text-[11px]">Checkout</Button>
            }
          />

        </div>
      ))}

      <Heading1 text="My Services" />

      {myServicesQ.isFetching && (<>Loading...</>)}

      {(myServicesQ.isError || myServicesQ.isLoadingError) && (
        <div>Error fetching data</div>
      )}

      {myServicesQ.isSuccess && myServicesQ.data?.data?.map(i => (
        <div
          className="mb-0"
          key={ i.id }
        >
          <CWCard
            id={ i.id }
            serviceName={ i.service_name }
            description={ i.description }
            rate={ i.rate }
            actions={(<>
              <Button
                variant="outline"
                className="text-[11px]"
              >Checkout</Button>
              <Button
                variant="outline"
                onClick={() => alert(i.id + ':' + i.service_name)}
                className="text-[11px]"
              >Reschedule</Button>
            </>)}
          />
        </div>
      ))}

  </>)
}
