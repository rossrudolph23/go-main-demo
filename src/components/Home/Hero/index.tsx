"use client";

import { Typewriter } from "react-simple-typewriter";
import { ClockIcon, MapPinIcon, CalendarIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { DayPicker, DateRange, getDefaultClassNames } from "react-day-picker"; 
import { format, addDays } from "date-fns";
import "react-day-picker/style.css";
//import "@/styles/dayPickerCustomStyles.css";//


export default function Hero() {
  const [isSameLocation, setIsSameLocation] = useState(true);
  
  // Single state for the entire range (Start & End)
  const [range, setRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Time States
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  return (
    <section
      id="home"
      className="relative z-40 overflow-visible pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[170px]"
    >
      <div className="mx-auto px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          {/* Left Column */}
          <div className="w-full max-w-lg px-4 font-sans">
            {/* Added overflow-visible so the popup can float outside */}
            <form className="relative overflow-visible rounded-3xl border border-white/20 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-sm">
              
              <div className="via-indigo-250 absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 to-indigo-500" />
              
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Book your Hertz car rental today!
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Premium Hertz rentals at your fingertips.
                </p>
              </div>

              {/* Location Inputs (Unchanged) */}
              {isSameLocation ? (
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
                  <InputWithIcon
                    type="text"
                    id="pickup-location"
                    name="pickup-location"
                    placeholder="e.g., DFW Airport"
                  >
                    <MapPinIcon className="size-5" />
                  </InputWithIcon>
                  <InputWithIcon
                    type="text"
                    id="dropoff-location"
                    name="dropoff-location"
                    placeholder="e.g., LAX Airport"
                  >
                    <MapPinIcon className="size-5" />
                  </InputWithIcon>
                </>
              )}

              <div className="mb-8 flex items-center gap-3">
                <div className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                  <input
                    id="same-dropoff"
                    type="checkbox"
                    checked={isSameLocation}
                    onChange={() => setIsSameLocation(!isSameLocation)}
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

              {/* UNIFIED DATES & TIME SECTION */}
              <div className="relative mb-8">
                <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Rental Period
                </label>
                
                {/* The Trigger Input - Shows selected range */}
                <div
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="group relative cursor-pointer"
                >
                  <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center text-indigo-600">
                     <CalendarIcon className="size-5" />
                  </div>
                  <input
                    type="text"
                    readOnly
                    placeholder="Select Pickup & Return Dates"
                    value={
                      range?.from
                        ? `${format(range.from, "MMM dd, yyyy")} ${range.to ? ` - ${format(range.to, "MMM dd, yyyy")}` : ""}`
                        : ""
                    }
                    className="w-full cursor-pointer rounded-2xl border-2 border-slate-100 bg-slate-50 py-4 pl-12 pr-4 text-lg font-semibold text-slate-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* THE POPUP MODAL */}
                {isCalendarOpen && (
                  <div className="absolute left-0 top-0 -mt-69 z-50 w-[650px] -translate-x-[15%] rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl sm:w-[600px] sm:-translate-x-4">
                    
                    {/* 1. Dual Month Calendar */}
                    <DayPicker
                      mode="range"
                      min={2}
                      selected={range}
                      onSelect={setRange}
                      numberOfMonths={2}
                      pagedNavigation
                      showOutsideDays
                      classNames={rangeClassNames} // Using the new styles below
                    />

                    {/* 2. Time Pickers (Inside the Modal) */}
                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                      
                      {/* Pickup Time */}
                      <div className="relative">
                        <select
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                          <option value="" disabled>Pickup Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                        </select>
                        <ClockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>

                      {/* Dropoff Time */}
                      <div className="relative">
                        <select
                           value={dropoffTime}
                           onChange={(e) => setDropoffTime(e.target.value)}
                           className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                          <option value="" disabled>Drop-off Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                        </select>
                        <ClockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    {/* 3. Apply Button */}
                    <button
                      type="button"
                      onClick={() => setIsCalendarOpen(false)}
                      className="mt-4 w-full rounded-xl bg-black py-3 text-sm font-bold text-white transition-colors hover:bg-gray-800"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Main Form Submit */}
              <button
                type="button"
                className="hover:shadow-2xs w-full rounded-full bg-gradient-to-r from-indigo-200 to-indigo-700 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-indigo-300 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Find a Car
              </button>
            </form>
          </div>

          {/* Right Column (Text) - Unchanged */}
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
                Handcrafted Next.js starter for your next - Startup, Business, Agency or SaaS Website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ensure "InputWithIcon" is defined at the bottom (same as before)
function InputWithIcon({ type, id, name, placeholder, children }: { type: string; id: string; name: string; placeholder: string; children: React.ReactNode; }) {
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

const rangeClassNames = {
  root: "w-full font-sans",
  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-8 sm:space-y-0 justify-center", // Side by side months
  caption: "flex justify-center pt-1 relative items-center mb-4",
  caption_label: "text-base font-bold text-slate-900",
  nav: "space-x-1 flex items-center absolute inset-0 justify-between",
  nav_button: "p-1 hover:bg-slate-100 rounded-md text-slate-500 hover:text-black transition-colors",
  table: "w-full border-collapse space-y-1",
  head_row: "flex",
  head_cell: "text-slate-400 rounded-md w-9 font-normal text-[0.8rem] uppercase tracking-wider",
  row: "flex w-full mt-2",
  
  // Base style for all days
  day: "h-9 w-9 p-0 font-normal hover:bg-slate-100 rounded-full text-slate-900 transition-colors",
  
  // RANGE STYLES
  range_start: "bg-black text-white hover:bg-black hover:text-white rounded-l-full rounded-r-none",
  range_end: "bg-black text-white hover:bg-black hover:text-white rounded-r-full rounded-l-none",
  range_middle: "bg-slate-100 text-slate-900 rounded-none hover:bg-slate-200",
  
  day_today: "font-bold text-indigo-600",
  day_outside: "text-slate-300 opacity-50",
  day_disabled: "text-slate-300 opacity-50",
  day_hidden: "invisible",
};