// https://leetcode.com/problems/design-parking-system/

class ParkingSystem {
  // types for the constructor
  space: {
    1: number;
    2: number;
    3: number;
  };

  constructor(big: number, medium: number, small: number) {
    this.space = {
      1: big || 0,
      2: medium || 0,
      3: small || 0,
    };
  }

  checkHasSpace(carType: number): boolean {
    if (this.space[carType] > 0) {
      // removes a car if there's still a spot left
      this.space[carType] -= 1;
      return true;
    }

    return false;
  }

  addCar(carType: number): boolean {
    return this.checkHasSpace(carType);
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

/*

Constraints:

0 <= big, medium, small <= 1000
carType is 1, 2, or 3
At most 1000 calls will be made to addCar

Example Input and Output

Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.


*/
