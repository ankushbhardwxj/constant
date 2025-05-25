import CalendarAreaView from "./calendar-area-view"
import CalendarHeader from "./calendar-header"

function CalendarView() {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <CalendarHeader />
      <CalendarAreaView />
    </div>
  )
}

export default CalendarView