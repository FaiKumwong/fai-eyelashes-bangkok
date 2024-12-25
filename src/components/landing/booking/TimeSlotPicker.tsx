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
        <h3 className="text-lg font-semibold mb-4">{translations[language].selectDate}</h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-pink-50 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-300"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">{translations[language].available}</h3>
        <div className="grid grid-cols-2 gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`p-2 rounded-md border transition-all duration-300 ${
                selectedSlot === slot
                  ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white border-purple-600'
                  : 'bg-pink-50 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-300 hover:text-white border-pink-200'
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