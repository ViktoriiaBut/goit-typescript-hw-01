
export enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


const isWeekend = (day: number): boolean => {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) return true;
    return false;
}; 
isWeekend(DayOfWeek.Friday);
isWeekend(DayOfWeek.Saturday);