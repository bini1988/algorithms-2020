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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF0aXZlQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOYXRpdmVBcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLFdBQVc7SUFBeEI7UUFDVSxRQUFHLEdBQVEsRUFBRSxDQUFDO0lBc0J4QixDQUFDO0lBcEJDLElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxHQUFHLENBQUMsSUFBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBYTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQXZCRCxrQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXJyYXkgfSBmcm9tIFwiLi9JQXJyYXkuZFwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQXJyYXk8VD4gaW1wbGVtZW50cyBJQXJyYXk8VD4ge1xuICBwcml2YXRlIGFycjogVFtdID0gW107XG5cbiAgcHVibGljIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLmFyci5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBhZGQoaXRlbTogVCwgaW5kZXggPSB0aGlzLnNpemUpOiB2b2lkIHtcbiAgICB0aGlzLmFyci5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogVCB7XG4gICAgY29uc3QgW2l0ZW1dID0gdGhpcy5hcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5hcnIuc2xpY2UoMCwgdGhpcy5zaXplKS5qb2luKFwiLFwiKTtcbiAgfVxufVxuIl19