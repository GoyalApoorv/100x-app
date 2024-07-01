export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = Array.from({ length: 31 }, (_, index) => index + 1);
const currentYear = new Date().getFullYear();
const startYear = 1980;
const YEARS = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => startYear + index,
).reverse();

const DatePicker = ({ handleInputChange }) => {
  return (
    <section className="grid w-full grid-cols-4 gap-3">
      <fieldset className="group col-span-2 rounded border border-neutral-500 px-3 pb-4 pt-2 focus-within:border-twitter-default">
        <legend className="text-xs font-medium text-neutral-500 group-focus-within:text-twitter-default">
          <div className="px-1">Month</div>
        </legend>
        <select
          onChange={(e) => {
            handleInputChange("month", +e.target.value); //++ to convert string to +ve integer
          }}
          placeholder="Month"
          className="w-full bg-neutral-1000 text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        >
          {MONTHS.map((m, i) => {
            return (
              <option key={i} value={i}>
                {m}
              </option>
            );
          })}
        </select>
        {/* <input type="text" placeholder="Select month" class="w-full bg-transparent focus:outline-none text-neutral-50 placeholder:text-neutral-500"> */}
      </fieldset>
      <fieldset className="group rounded border border-neutral-500 px-3 pb-4 pt-2 focus-within:border-twitter-default">
        <legend className="text-xs font-medium text-neutral-500 group-focus-within:text-twitter-default">
          <div className="px-1">Day</div>
        </legend>
        <select
          onChange={(e) => {
            handleInputChange("day", +e.target.value);
          }}
          className="w-full bg-neutral-1000 text-neutral-50  placeholder:text-neutral-500 focus:outline-none"
        >
          {DAYS.map((d, i) => {
            return <option key={i}>{d}</option>;
          })}
        </select>
      </fieldset>
      <fieldset className="group rounded border border-neutral-500 px-3 pb-4 pt-2 focus-within:border-twitter-default">
        <legend className="text-xs font-medium text-neutral-500 group-focus-within:text-twitter-default">
          <div className="px-1">Year</div>
        </legend>
        <select
          onChange={(e) => {
            handleInputChange("year", +e.target.value);
          }}
          defaultValue={currentYear}
          className="w-full bg-neutral-1000 text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        >
          {YEARS.map((y, i) => {
            return (
              <option value={y} key={i}>
                {y}
              </option>
            );
          })}
        </select>
      </fieldset>
    </section>
  );
};

export default DatePicker;
