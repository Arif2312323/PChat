"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTime = void 0;
function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}
exports.extractTime = extractTime;
// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}
