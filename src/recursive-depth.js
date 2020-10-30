module.exports = class DepthCalculator {
    calculateDepth(arr, q = 0) {
        let countArr = 0,
        ind = q;
        if (Array.isArray(arr)) {
            ind++;
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    countArr++;
                }
            }
            if (countArr > 0) {
                countArr = 0;
                arr = arr.flat();
                ind = this.calculateDepth(arr, ind);
            }
        }
        return ind;
    }
};
