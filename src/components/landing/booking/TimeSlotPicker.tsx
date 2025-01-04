import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useLanguage } from '@/contexts/LanguageContext';
import { format, isBefore, startOfToday } from 'date-fns';
import { th } from 'date-fns/locale';
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const TIME_SLOTS = [
  '08:00-10:00',
  '10:00-12:00',
  '12:00-14:00',
  '14:00-16:00',
  '16:00-18:00',
  '18:00-20:00',
  '20:00-22:00'
];

const TimeSlotPicker = () => {
  const { language } = useLanguage();
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);

  const translations = {
    en: {
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      available: 'Available Time Slots'
    },
    th: {
      selectDate: 'เลือกวันที่',
      selectTime: 'เลือกเวลา',
      available: 'ช่วงเวลาที่ว่าง'
    }
  };

  const today = startOfToday();
  
  const disabledDays = {
    before: today
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">{translations[language].selectDate}</h3>
          <div className="w-full max-w-sm bg-gradient-to-r from-pink-300 to-pink-200 p-4 rounded-lg shadow-lg">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={language === 'th' ? th : undefined}
              disabled={disabledDays}
              className="mx-auto bg-transparent"
              classNames={{
                day_selected: "bg-purple-500/30 text-purple-900 hover:bg-purple-500/40 font-bold rounded-full",
                day: "text-gray-700 hover:bg-purple-500/20 hover:text-purple-900 rounded-full transition-all duration-200 aspect-square flex items-center justify-center",
                day_today: "bg-white rounded-full border-2 border-purple-500 aspect-square flex items-center justify-center",
                day_disabled: "text-gray-400 line-through hover:bg-transparent hover:text-gray-400 cursor-not-allowed",
                head_cell: "text-purple-600 font-bold text-sm uppercase tracking-wide",
                nav_button: "text-purple-600 hover:bg-purple-100 rounded-full transition-colors p-1",
                caption: "text-purple-800 font-bold text-lg capitalize flex items-center justify-center gap-2 px-4",
                nav_button_previous: "text-purple-600 hover:bg-purple-100 rounded-full transition-colors p-1",
                nav_button_next: "text-purple-600 hover:bg-purple-100 rounded-full transition-colors p-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex justify-between mb-2",
                row: "flex w-full mt-2 justify-between",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 h-9 w-9",
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"
              }}
              components={{
                IconLeft: () => <ChevronsLeft className="h-4 w-4" />,
                IconRight: () => <ChevronsRight className="h-4 w-4" />,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">{translations[language].available}</h3>
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  selectedSlot === slot
                    ? 'bg-gradient-to-r from-purple-500 to-purple-400'
                    : 'bg-gradient-to-r from-pink-400 to-pink-300 hover:from-purple-500 hover:to-purple-400'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotPicker;
