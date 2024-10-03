/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        // Key: check left and right side of the current index to see if they are empty
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1
            count++;
            i++;
        }

        // Return early if we have enough flowers
        if (count >= n) {
            return true;
        }
    }

    // Return the boolean of the count of flowers with the required number of flowers
    return count >= n;
};