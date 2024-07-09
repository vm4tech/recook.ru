// function toTotalTime(this: number): string {
//     const minutes = this % 60
//     const hours = this / 60
//     return hours >= 1 ? `${hours}ч ${minutes}мин` : `${minutes}мин`
// }
//
// // Declare the Extension
// declare global {
//     interface Number {
//         toTotalTime(): string;
//     }
// }
//
// Number.prototype.toTotalTime = toTotalTime