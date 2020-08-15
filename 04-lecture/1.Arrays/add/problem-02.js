"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingleArray_1 = require("../SingleArray");
function test([line]) {
    const SIZE = parseInt(line, 10);
    const arr = new SingleArray_1.SingleArray();
    for (let i = 0; i < SIZE; i++) {
        arr.add(i);
    }
    return null;
}
test.title = "SingleArray";
module.exports = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvYmxlbS0wMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2JsZW0tMDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFFN0MsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQVc7SUFDNUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLHlCQUFXLEVBQVUsQ0FBQztJQUV0QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDWjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xlQXJyYXkgfSBmcm9tIFwiLi4vU2luZ2xlQXJyYXlcIjtcblxuZnVuY3Rpb24gdGVzdChbbGluZV06IHN0cmluZ1tdKSB7XG4gIGNvbnN0IFNJWkUgPSBwYXJzZUludChsaW5lLCAxMCk7XG4gIGNvbnN0IGFyciA9IG5ldyBTaW5nbGVBcnJheTxudW1iZXI+KCk7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykge1xuICAgIGFyci5hZGQoaSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbnRlc3QudGl0bGUgPSBcIlNpbmdsZUFycmF5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdDtcbiJdfQ==