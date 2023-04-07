
export function getYearsSince(year: number): number {
    const date = new Date();
    return (date.getFullYear() - year);
}