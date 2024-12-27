import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useLanguage } from '@/contexts/LanguageContext';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

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

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">{translations[language].selectDate}</h3>
        <div className="w-full max-w-sm bg-gradient-to-r from-pink-300 to-pink-200 p-4 rounded-lg shadow-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={language === 'th' ? th : undefined}
            className="mx-auto bg-transparent"
            classNames={{
              day_selected: "bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:bg-purple-600 hover:text-white font-bold",
              day: "text-gray-700 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-400/20 rounded-full transition-all duration-200",
              head_cell: "text-gray-600 font-semibold text-sm uppercase",
              nav_button: "text-gray-600 hover:bg-purple-100 rounded-full transition-colors p-1",
              caption: "text-gray-800 font-bold text-lg capitalize flex justify-center space-x-1",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse",
              head_row: "flex",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 h-9 w-9",
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"
            }}
            formatters={{
              formatCaption: (date, options) => {
                return format(date, 'MMMM yyyy', { locale: language === 'th' ? th : undefined });
              }
            }}
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">{translations[language].available}</h3>
        <div className="grid grid-cols-2 gap-3">
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
  );
};

export default TimeSlotPicker;