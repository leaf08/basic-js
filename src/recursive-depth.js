module.exports = class DepthCalculator {
    depth = 0;
    count = 0;
    calculateDepth(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                this.count++;
                break;
            }
        }
        if(this.count > 0) {
            arr.flat();
            this.depth++;
            this.calculateDepth(arr);
        }
        return this.depth;
    }
};
