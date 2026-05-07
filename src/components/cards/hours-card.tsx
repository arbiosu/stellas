'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock } from 'lucide-react';

const HOURS_DATA = [
  { day: 'Monday', shortDay: 'Mon', hours: 'Closed', isClosed: true },
  { day: 'Tuesday', shortDay: 'Tue', hours: '11AM - 9PM', isClosed: false },
  { day: 'Wednesday', shortDay: 'Wed', hours: '11AM - 9PM', isClosed: false },
  { day: 'Thursday', shortDay: 'Thu', hours: '11AM - 9PM', isClosed: false },
  { day: 'Friday', shortDay: 'Fri', hours: '11AM - 9PM', isClosed: false },
  { day: 'Saturday', shortDay: 'Sat', hours: '11AM - 9PM', isClosed: false },
  { day: 'Sunday', shortDay: 'Sun', hours: '12PM - 9PM', isClosed: false },
];

function getCurrentDayIndex() {
  const today = new Date().getDay();
  return today === 0 ? 6 : today - 1;
}

export default function HoursCard() {
  const [currentDayIndex, setCurrentDayIndex] = useState(getCurrentDayIndex());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = getCurrentDayIndex();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      setCurrentDayIndex(currentDay);

      if (HOURS_DATA[currentDay].isClosed) {
        setIsOpen(false);
      } else {
        setIsOpen(
          (currentHour >= 11 && currentHour < 20) ||
            (currentHour === 20 && currentMinute <= 45)
        );
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className='border-border/50 bg-card h-full shadow-sm'>
      <CardContent className='p-6 lg:p-8'>
        <div className='mb-6 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-secondary flex h-10 w-10 items-center justify-center rounded-full'>
              <Clock className='text-foreground h-5 w-5' />
            </div>
            <h3 className='text-foreground font-serif text-2xl font-semibold tracking-tight'>
              Hours
            </h3>
          </div>
          <Badge
            variant={isOpen ? 'default' : 'secondary'}
            className={
              isOpen
                ? 'bg-emerald-800 text-emerald-50'
                : 'bg-secondary text-muted-foreground'
            }
          >
            <span
              className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                isOpen
                  ? 'animate-pulse bg-emerald-300'
                  : 'bg-muted-foreground/50'
              }`}
            />
            {isOpen ? 'Open Now' : 'Closed'}
          </Badge>
        </div>

        <div className='space-y-0'>
          {HOURS_DATA.map((item, index) => {
            const isToday = index === currentDayIndex;
            return (
              <React.Fragment key={item.day}>
                <div
                  className={`flex items-center justify-between rounded-lg px-3 py-3 transition-colors ${
                    isToday ? 'bg-accent/10' : 'hover:bg-secondary/50'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <span
                      className={`text-sm font-medium ${
                        isToday ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {item.day}
                    </span>
                    {isToday && (
                      <Badge
                        variant='outline'
                        className='border-accent/30 text-primary px-1.5 py-0 text-[10px] font-medium'
                      >
                        Today
                      </Badge>
                    )}
                  </div>
                  <span
                    className={`text-sm tabular-nums ${
                      item.isClosed
                        ? 'text-muted-foreground/60'
                        : isToday
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
                {index < HOURS_DATA.length - 1 && (
                  <Separator className='opacity-50' />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
