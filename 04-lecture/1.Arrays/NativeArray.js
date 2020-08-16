"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeArray = void 0;
class NativeArray {
    constructor() {
        this.arr = [];
    }
    get size() {
        return this.arr.length;
    }
    get isEmpty() {
        return this.size === 0;
    }
    from(arr) {
        this.arr = arr;
    }
    add(item, index = this.size) {
        this.arr.splice(index, 0, item);
    }
    remove(index) {
        const [item] = this.arr.splice(index, 1);
        return item;
    }
    toString() {
        return this.arr.slice(0, this.size).join(",");
    }
}
exports.NativeArray = NativeArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF0aXZlQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOYXRpdmVBcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLFdBQVc7SUFBeEI7UUFDVSxRQUFHLEdBQVEsRUFBRSxDQUFDO0lBMEJ4QixDQUFDO0lBeEJDLElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBUTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRU0sR0FBRyxDQUFDLElBQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQWE7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUEzQkQsa0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFycmF5IH0gZnJvbSBcIi4vSUFycmF5LmRcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUFycmF5PFQ+IGltcGxlbWVudHMgSUFycmF5PFQ+IHtcbiAgcHJpdmF0ZSBhcnI6IFRbXSA9IFtdO1xuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IDA7XG4gIH1cblxuICBwdWJsaWMgZnJvbShhcnI6IFRbXSkge1xuICAgIHRoaXMuYXJyID0gYXJyO1xuICB9XG5cbiAgcHVibGljIGFkZChpdGVtOiBULCBpbmRleCA9IHRoaXMuc2l6ZSk6IHZvaWQge1xuICAgIHRoaXMuYXJyLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICBjb25zdCBbaXRlbV0gPSB0aGlzLmFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmFyci5zbGljZSgwLCB0aGlzLnNpemUpLmpvaW4oXCIsXCIpO1xuICB9XG59XG4iXX0=