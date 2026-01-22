"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { ClockIcon, MapPinIcon, SparklesIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react"; 
import Link from "next/link";
import { DayPicker } from "react-day-picker"; 
import "react-day-picker/style.css";


export default function Hero() {
  const [isSameLocation, setIsSameLocation] = useState(true);
  const [dateSelected, setDateSelected] = useState<Date>();

  return (
    <section
      id="home"
      className="relative z-40 overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[170px]"
    >
      <div className="mx-auto px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
              
          {/* Left Column */}          
          <div className="w-full max-w-lg px-4 font-sans">
            <form className="relative overflow-hidden rounded-3xl border border-white/20 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-sm">
            
              {/* Decorative Accent Elements */}
              <div className="via-indigo-250 absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 to-indigo-500" />
              <div className="mb-8 text-center">

                {/*pickup and dropoff Modal */}
              <div className="bg-indigo-300 fixed h-[475px] w-[650px]">
                <DayPicker
                  animate
                  mode="single"
                  selected={dateSelected}
                  onSelect={setDateSelected}
                  footer={
                    dateSelected ? `Selected: ${dateSelected.toLocaleDateString()}` 
                    : "Pick a day."
                  }
                />
                <div>{/* Calendar */}</div>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    aria-label="Pickup Time"
                    name="pickupTime"
                    className="h-16 block w-full rounded-sm border border-gray-500 bg-white px-4 text-black" 
                    defaultValue=""               
                  >
                    <option value="" disabled hidden>
                      Pickup Time
                    </option>
                    <option value="00:30:00">12:30 AM</option>
                    <option value="01:00:00">1:00 AM</option>
                    <option value="01:30:00">1:30 AM</option>
                    <option value="02:00:00">2:00 AM</option>
                    <option value="02:30:00">2:30 AM</option>
                    <option value="03:00:00">3:00 AM</option>
                    <option value="03:30:00">3:30 AM</option>
                    <option value="04:00:00">4:00 AM</option>
                    <option value="04:30:00">4:30 AM</option>
                    <option value="05:00:00">5:00 AM</option>
                    <option value="05:30:00">5:30 AM</option>
                    <option value="06:00:00">6:00 AM</option>
                    <option value="06:30:00">6:30 AM</option>
                    <option value="07:00:00">7:00 AM</option>
                    <option value="07:30:00">7:30 AM</option>
                    <option value="08:00:00">8:00 AM</option>
                    <option value="08:30:00">8:30 AM</option>
                    <option value="09:00:00">9:00 AM</option>
                    <option value="09:30:00">9:30 AM</option>
                    <option value="10:00:00">10:00 AM</option>
                    <option value="10:30:00">10:30 AM</option>
                    <option value="11:00:00">11:00 AM</option>
                    <option value="11:30:00">11:30 AM</option>
                    <option value="12:00:00">12:00 PM</option>
                    <option value="12:30:00">12:30 PM</option>
                    <option value="13:00:00">1:00 PM</option>
                    <option value="13:30:00">1:30 PM</option>
                    <option value="14:00:00">2:00 PM</option>
                    <option value="14:30:00">2:30 PM</option>
                    <option value="15:00:00">3:00 PM</option>
                    <option value="15:30:00">3:30 PM</option>
                    <option value="16:00:00">4:00 PM</option>
                    <option value="16:30:00">4:30 PM</option>
                    <option value="17:00:00">5:00 PM</option>
                    <option value="17:30:00">5:30 PM</option>
                    <option value="18:00:00">6:00 PM</option>
                    <option value="18:30:00">6:30 PM</option>
                    <option value="19:00:00">7:00 PM</option>
                    <option value="19:30:00">7:30 PM</option>
                    <option value="20:00:00">8:00 PM</option>
                    <option value="20:30:00">8:30 PM</option>
                    <option value="21:00:00">9:00 PM</option>
                    <option value="21:30:00">9:30 PM</option>
                    <option value="22:00:00">10:00 PM</option>
                    <option value="22:30:00">10:30 PM</option>
                    <option value="23:00:00">11:00 PM</option>
                    <option value="23:30:00">11:30 PM</option>
                    <option value="00:00:00">12:00 AM</option>
                  </select>
                  <ClockIcon className="size-6 text-indigo-600 pointer-events-none absolute left-2 top-1/2 z-10 flex -translate-y-1/2 " />
                </div>
              </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Book your Hertz car rental today!
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Premium Hertz rentals at your fingertips.
                </p>                
              </div>
                
              {/* 3. Conditional Logic for Inputs */}
              {isSameLocation ? (
                // Single Input Mode
                <InputWithIcon
                  type="text"
                  id="pickup-dropoff-location"
                  name="Pickup & Drop-off Location"
                  placeholder="e.g., DFW Airport"
                >
                  <MapPinIcon className="size-5" />
                </InputWithIcon>
              ) : (
                
                <>
                   
                  {/* Pickup Location */}
                  <InputWithIcon
                    type="text"
                    id="pickup-location"
                    name="pickup-location"
                    placeholder="e.g., DFW Airport"
                  >
                    <MapPinIcon className="size-5" />
                  </InputWithIcon>

                  {/* Drop-Off Location */}
                  <InputWithIcon
                    type="text"
                    id="dropoff-location"
                    name="dropoff-location"
                    placeholder="e.g., DFW Airport"
                  >
                    <MapPinIcon className="size-5" />
                  </InputWithIcon>
                </>
              )}

             

              {/* Same Dropoff Checkbox */}
              <div className="mb-8 flex items-center gap-3">
                <div className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                  <input
                    id="same-dropoff"
                    type="checkbox"
                    checked={isSameLocation}
                    onChange={() => setIsSameLocation(!isSameLocation)} // 4. Toggle the state
                    className="h-5 w-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <label
                  htmlFor="same-dropoff"
                  className="block cursor-pointer select-none text-sm font-medium text-slate-700"
                >
                  Same Drop-Off Location
                </label>
              </div>
              {/* Dates Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor="pickup-date"
                    className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-indigo-600"
                  >
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    id="pickup-date"
                    name="pickup-date"
                    className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 font-semibold text-slate-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="return-date"
                    className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-indigo-600"
                  >
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="return-date"
                    name="return-date"
                    className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 font-semibold text-slate-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button (Optional placeholder) */}
              <button
                type="button"
                className="hover:shadow-2xs w-full rounded-full bg-gradient-to-r from-indigo-200 to-indigo-700 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-indigo-300 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Find a Car
              </button>
            </form>
          
          </div>
          
          {/* Right Column */}

          <div className="w-full px-4 lg:w-7/12">
            <div className="mx-auto mb-12 max-w-[720px] text-center lg:mb-0 lg:ml-0 lg:text-left">
              <h1 className="font-heading mb-5 max-w-[530px] text-2xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                Next.js Boilerplate for Your{" "}
                <Typewriter
                  words={["Startup", "SaaS", "Business", "Agency"]}
                  cursor
                  loop={0}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-dark-text mb-12 text-base">
                Handcrafted Next.js starter for your next - Startup, Business,
                Agency or SaaS Website.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Meet our newest fleet
                </h2>
                <p className="mt-4 text-lg text-white">
                  New rentalcars. Round trip or one-way. Let's go!
                </p>
              </div>
              <div className="mt-10 flex-wrap sm:flex">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className=" border-white/20">
                    <h3 className="text-xl font-bold text-white">
                      #1 Loyalty Program
                    </h3>
                    <p className="mt-2 text-gray-200">
                      Voted by customers via Newsweek*
                    </p>
                  </div>
                  <div className=" border-white/20">
                    <h4 className="text-xl font-bold text-white">
                      Skip the line
                    </h4>
                    <p className="mt-2 text-gray-200">No hassle, just drive</p>
                  </div>
                  <div className=" border-white/20">
                    <h5 className="text-xl font-bold text-white">
                      Trusted for 100+ years
                    </h5>
                    <p className="mt-2 text-gray-200">
                      With 10k+ rental locations worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-noise-pattern absolute bottom-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40"></div>
      <div className="absolute right-0 top-0 -z-10">
        <svg
          width="1356"
          height="860"
          viewBox="0 0 1356 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_201_2181)">
            <rect
              x="450.088"
              y="-126.709"
              width="351.515"
              height="944.108"
              transform="rotate(-34.6784 450.088 -126.709)"
              fill="url(#paint0_linear_201_2181)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2181"
              x="0.0878906"
              y="-776.711"
              width="1726.24"
              height="1876.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_201_2181"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2181"
              x1="417.412"
              y1="59.4717"
              x2="966.334"
              y2="603.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <svg
          width="1469"
          height="498"
          viewBox="0 0 1469 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_201_2182)">
            <rect
              y="450"
              width="1019"
              height="261"
              fill="url(#paint0_linear_201_2182)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2182"
              x="-450"
              y="0"
              width="1919"
              height="1161"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_201_2182"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2182"
              x1="-94.7239"
              y1="501.47"
              x2="-65.8058"
              y2="802.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

function InputWithIcon({
  type,
  id,
  name,
  placeholder,
  children,
}: {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group mb-6">
      <label className="mb-2 items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors group-focus-within:text-indigo-600">
        {name}
      </label>
      <div className="relative items-center">
        <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center text-indigo-600">
          {children}
        </div>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 py-4 pl-12 pr-4 text-lg font-semibold text-slate-900 transition-all placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
        />
      </div>
    </div>
  );
}
