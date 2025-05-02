'use client';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { isBefore, startOfToday } from 'date-fns';
import { useEvent } from './EventContext';

function DateSelector() {
   const { range, setRange, resetRange } = useEvent();

   return (
      <div className="flex flex-column justify-content-between text-primary-50">
         <div className='flex justify-content-center align-items-center'>
         <DayPicker
            className="pt-5 rdp-day_selected "
            mode="range"
            selected={range}
            onSelect={setRange}
            min={1}
            max={30}
            fromMonth={new Date()}
            fromDate={startOfToday()}
            toYear={new Date().getFullYear() + 5}
            captionLayout="dropdown"
            numberOfMonths={1}
            disabled={(date) => isBefore(date, startOfToday())}
         />
         </div>

         <div className="flex align-items-center justify-content-between px-5 bg-accent-50 text-primary-50">
            <div className="flex items-baseline gap-5"></div>

            {range.from || range.to ? (
               <button
                  className="border-0 py-2 px-4 fw-semibold"
                  onClick={resetRange}
               >
                  Clear
               </button>
            ) : null}
         </div>
      </div>
   );
}

export default DateSelector;
