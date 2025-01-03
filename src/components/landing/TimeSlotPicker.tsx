import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

const TimeSlotPicker = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full max-w-sm mx-auto">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-white"
      />
    </div>
  );
};

export default TimeSlotPicker;