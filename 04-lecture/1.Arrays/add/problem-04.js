"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FactorArray_1 = require("../FactorArray");
function test([line]) {
    const SIZE = parseInt(line, 10);
    const arr = new FactorArray_1.FactorArray();
    for (let i = 0; i < SIZE; i++) {
        arr.add(i);
    }
    return null;
}
test.title = "FactorArray";
module.exports = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvYmxlbS0wNC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2JsZW0tMDQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFFN0MsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQVc7SUFDNUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLHlCQUFXLEVBQVUsQ0FBQztJQUV0QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDWjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjdG9yQXJyYXkgfSBmcm9tIFwiLi4vRmFjdG9yQXJyYXlcIjtcblxuZnVuY3Rpb24gdGVzdChbbGluZV06IHN0cmluZ1tdKSB7XG4gIGNvbnN0IFNJWkUgPSBwYXJzZUludChsaW5lLCAxMCk7XG4gIGNvbnN0IGFyciA9IG5ldyBGYWN0b3JBcnJheTxudW1iZXI+KCk7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykge1xuICAgIGFyci5hZGQoaSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbnRlc3QudGl0bGUgPSBcIkZhY3RvckFycmF5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdDtcbiJdfQ==