const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {

  calculateDepth(arr) {
      let maxDepth = 1;
      for (let i = 0; i < arr.length; i++) {
        let cnt = 1;
        if (Array.isArray(arr[i])) {
            cnt += this.calculateDepth(arr[i]);
        }
        if (cnt > maxDepth) {
          maxDepth = cnt;
        }
      }
      return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
