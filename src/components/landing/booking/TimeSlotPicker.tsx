import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useLanguage } from '@/contexts/LanguageContext';

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
        <div className="w-full max-w-sm bg-gradient-to-r from-pink-300 to-pink-200 p-4 rounded-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="mx-auto bg-transparent text-white font-medium"
            classNames={{
              day_selected: "bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:bg-purple-600 hover:text-white font-bold text-lg",
              day: "text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 hover:text-white font-medium transition-all duration-200 text-lg",
              head_cell: "text-white font-bold text-lg",
              nav_button: "text-white hover:bg-purple-400 transition-colors",
              caption: "text-white font-bold text-xl"
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