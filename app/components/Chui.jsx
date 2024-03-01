import { CheckIcon } from '@heroicons/react/20/solid';
import { useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const includedFeatures = [
  'On-site visits',
  'Inventory management',
  'Training, research and development',
  'Team building',
  'Financial support',
  'Strategic positioning'
];

export default function Membership() {
  const [open, setOpen] = useState(true);
  const [selectedService, setSelectedService] = useState('');

  const cancelButtonRef = useRef(null);

  const handleServiceToggle = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">CHUI</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-red-600">Membership</h3>
            <p className="mt-6 text-base leading-7 text-black">
              An adaptable solution blending operations, innovation, and growth for businesses to ensure effectiveness and success in the business.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-red-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 items-center">
                  <input
                    type="radio"
                    id={feature}
                    name="selectedService"
                    checked={selectedService === feature}
                    onChange={() => handleServiceToggle(feature)}
                    className="h-5 w-5 text-red-600"
                  />
                  <label htmlFor={feature} className="cursor-pointer">
                    {feature}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center p-2 lg:flex lg:justify-center">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="mx-auto max-w-xs px-8">
                <p>
                  Selected Service: {selectedService}
                </p>
                <a
                  href="mailto:venturesorigami@gmail.com"
                  className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >  
                Contact Us
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
