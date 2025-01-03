import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from '@/contexts/LanguageContext';
import { th } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4 mx-2" />,
          IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4 mx-2" />
        }}
      />
    </div>
  );
};

export default TimeSlotPicker;