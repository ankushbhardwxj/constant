'use client'
import { Button } from "@/components/ui/button";
import { CalendarView } from "@/lib/models/app.model";
import { useAppStore } from "@/lib/stores/app.store";
import { ChevronLeft, ChevronRight, ClipboardList, Menu, Moon, Sun } from "lucide-react";
import { useCallback } from "react";

function CalendarHeader() {
  const store = useAppStore();

  const toggleSidebar = useCallback(() => {
  }, [])

  const navigateToToday = useCallback(() => {
    console.log("navigate to today");
  }, [])

  const navigatePrev = useCallback(() => {
    console.log("navigate prev");
  }, [])

  const navigateNext = useCallback(() => {
    console.log("navigate next");
  }, [])

  const handleViewChange = useCallback((newView: CalendarView) => {
    console.log("handle view change")
  }, []);

  const toggleBacklog = useCallback(() => {

  }, [])

  const formatDateRange = useCallback(() => {
    if (store.calendarView === "day") {
      return store.currentDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    }
    if (store.calendarView === "week") {
      const startOfWeek = new Date(store.currentDate)
      startOfWeek.setDate(store.currentDate.getDate() - store.currentDate.getDay())

      const endOfWeek = new Date(startOfWeek)
      endOfWeek.setDate(startOfWeek.getDate() + 6)

      const startMonth = startOfWeek.toLocaleDateString("en-US", { month: "short" })
      const endMonth = endOfWeek.toLocaleDateString("en-US", { month: "short" })
      const startDay = startOfWeek.getDate()
      const endDay = endOfWeek.getDate()
      const year = endOfWeek.getFullYear()

      if (startMonth === endMonth) {
        return `${startMonth} ${startDay} - ${endDay}, ${year}`
      } else {
        return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`
      }
    }
  }, [store.currentDate, store.calendarView])

  return (
    <div className="flex items-center justify-between border-b px-4 py-2 bg-background">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        <Button variant="outline" onClick={navigateToToday} className="h-9 mr-2">
          Today
        </Button>
        <div className="flex items-center space-x-1 mr-2">
          <Button variant="ghost" size="icon" onClick={navigatePrev} className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={navigateNext} className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <h2 className="text-xl font-semibold">{formatDateRange()}</h2>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={toggleBacklog}>
            <ClipboardList className="h-4 w-4" />
            <span>Backlog</span>
            {store.backlogItems.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {store.backlogItems.length}
              </span>
            )}
          </Button>

          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={store.calendarView === "day" ? "secondary" : "ghost"}
              className="rounded-none px-4"
              onClick={() => handleViewChange("day")}
            >
              Day
            </Button>
            {/* Removed 3-day view from desktop */}
            <Button
              variant={store.calendarView === "week" ? "secondary" : "ghost"}
              className="rounded-none px-4"
              onClick={() => handleViewChange("week")}
            >
              Week
            </Button>
            <Button
              variant={store.calendarView === "month" ? "secondary" : "ghost"}
              className="rounded-none px-4"
              onClick={() => handleViewChange("month")}
            >
              Month
            </Button>
            {/* Removed Schedule view from desktop */}
          </div>

          <Button variant="ghost" size="icon" onClick={store.toggleTheme} className="ml-2">
            {store.theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
  )
}

export default CalendarHeader;