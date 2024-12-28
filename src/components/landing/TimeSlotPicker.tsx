import React from 'react';
import { Scheduler } from "@aldabil/react-scheduler";
import { useLanguage } from '@/contexts/LanguageContext';

const TimeSlotPicker = () => {
  const { language } = useLanguage();

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

  console.log('TimeSlotPicker rendered with language:', language);

  return (
    <div className="space-y-8 max-w-4xl mx-auto bg-gradient-to-r from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{translations[language].selectDate}</h3>
      <Scheduler
        view="week"
        events={[]}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 8,
          endHour: 20,
          step: 60
        }}
        day={{
          startHour: 8,
          endHour: 20,
          step: 60,
        }}
        selectedDate={new Date()}
        fields={[]}
        translations={{
          navigation: {
            month: language === 'th' ? 'เดือน' : 'Month',
            week: language === 'th' ? 'สัปดาห์' : 'Week',
            day: language === 'th' ? 'วัน' : 'Day',
            today: language === 'th' ? 'วันนี้' : 'Today',
            agenda: language === 'th' ? 'ตารางเวลา' : 'Agenda'
          }
        }}
        customViewer={(event) => {
          return <div>{event.title}</div>;
        }}
        styles={{
          cell: {
            backgroundColor: 'transparent'
          },
          selectedCell: {
            background: 'linear-gradient(to right, #9333ea, #7e22ce)',
            color: 'white'
          },
          hover: {
            background: 'linear-gradient(to right, #9333ea, #7e22ce)',
            color: 'white'
          }
        }}
      />
    </div>
  );
};

export default TimeSlotPicker;