import { TEvent } from "@/lib/models/event.model";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface ICalendarEventProps {
  event: TEvent;
}

function CalendarEvent({ event }: ICalendarEventProps) {
  const formatTimeWithMinutes = (date: Date) => {
    return format(date, "hh:mm a");
  };

  return (
    <motion.div
      className={cn(
        "absolute w-[95%] rounded-md px-2 py-1 text-white hover:opacity-90 transition-opacity shadow-sm",
        "to-blue-500",
        "cursor-pointer"
      )}
      style={{
        top: `${top}px`,
        height: `${eventHeight}px`,
        overflow: "hidden",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={cn("truncate font-medium", "text-sm")}>{event.title}</div>
      <div className="text-xs mt-1 opacity-90">
        {formatTimeWithMinutes(event.startDate)} -{" "}
        {formatTimeWithMinutes(event.endDate)}
      </div>
    </motion.div>
  );
}

export default CalendarEvent;
