"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VectorArray_1 = require("../VectorArray");
function test([line]) {
    const SIZE = parseInt(line, 10);
    const arr = new VectorArray_1.VectorArray(10);
    for (let i = 0; i < SIZE; i++) {
        arr.add(i);
    }
    return null;
}
test.title = "VectorArray";
module.exports = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvYmxlbS0wMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2JsZW0tMDMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFFN0MsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQVc7SUFDNUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLHlCQUFXLENBQVMsRUFBRSxDQUFDLENBQUM7SUFFeEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztBQUUzQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvckFycmF5IH0gZnJvbSBcIi4uL1ZlY3RvckFycmF5XCI7XG5cbmZ1bmN0aW9uIHRlc3QoW2xpbmVdOiBzdHJpbmdbXSkge1xuICBjb25zdCBTSVpFID0gcGFyc2VJbnQobGluZSwgMTApO1xuICBjb25zdCBhcnIgPSBuZXcgVmVjdG9yQXJyYXk8bnVtYmVyPigxMCk7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykge1xuICAgIGFyci5hZGQoaSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbnRlc3QudGl0bGUgPSBcIlZlY3RvckFycmF5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdDtcbiJdfQ==