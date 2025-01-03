import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from '@/contexts/LanguageContext';
import { th } from 'date-fns/locale';

const TimeSlotPicker = () => {
  const { language } = useLanguage();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full max-w-sm mx-auto">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={language === 'th' ? th : undefined}
        className="rounded-md border shadow bg-white"
      />
    </div>
  );
};

export default TimeSlotPicker;