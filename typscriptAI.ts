/*// 1. Define the Range Styles separately
const rangeModifiers = {
  range_start: "bg-black text-white rounded-l-full",
  range_end: "bg-black text-white rounded-r-full",
  range_middle: "bg-slate-100 text-slate-900 rounded-none",
};

// 2. Simplified ClassNames (keeping your custom layout)
const rangeClassNames = {
  ...getDefaultClassNames(),
  months: "flex flex-col sm:flex-row gap-4",
  month_caption: "text-base font-bold text-slate-900 mb-4 flex justify-center",
  day: "h-9 w-9 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors",
  selected: "bg-black text-white", // Fallback for single selection
};

// ... inside your Hero component ...

<DayPicker
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  classNames={rangeClassNames}
  modifiersClassNames={rangeModifiers} // <--- This is the missing piece
/>*/