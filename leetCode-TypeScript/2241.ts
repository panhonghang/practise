class ATM {
  // 20 ，50 ，100 ，200 和 500
  private map: Map<number, number>;
  private keyMap: Map<number, number>;
  constructor() {
    this.map = new Map([
      [20, 0],
      [50, 0],
      [100, 0],
      [200, 0],
      [500, 0],
    ]);
    this.keyMap = new Map([
      [0, 20],
      [1, 50],
      [2, 100],
      [3, 200],
      [4, 500],
    ]);
  }

  deposit(banknotesCount: number[]): void {
    if (banknotesCount.length === 0) {
      return;
    }
    banknotesCount.forEach((item, idx) => {
      if (this.keyMap.has(idx)) {
        const key = this.keyMap.get(idx)!;
        this.map.set(key, this.map.get(key)! + item);
      }
    });
  }

  updateHelper(count: number, value: number, d: number) {
    // 求整除
    const div = Math.floor(count / d);
    const num = Math.min(div, value);
    return num;
  }

  withdraw(amount: number): number[] {
    if (amount < 20) return [-1];
    let count = amount;
    const res: number[] = [0, 0, 0, 0, 0];
    const map: Map<number, number> = new Map();
    this.map.forEach((v, k) => map.set(k, v));

    while (count) {
      if (count >= 500 && map.get(500)! > 0) {
        const value = map.get(500)!;
        const num = this.updateHelper(count, value, 500);
        count -= num * 500;
        res[4] = res[4] + num;
        map.set(500, map.get(500)! - num);
      }
      if (count >= 200 && map.get(200)! > 0) {
        const value = map.get(200)!;
        const num = this.updateHelper(count, value, 200);
        count -= num * 200;
        res[3] = res[3] + num;
        map.set(200, map.get(200)! - num);
      }
      if (count >= 100 && map.get(100)! > 0) {
        const value = map.get(100)!;
        const num = this.updateHelper(count, value, 100);
        count -= num * 100;
        res[2] = res[2] + num;
        map.set(100, map.get(100)! - num);
      }
      if (count >= 50 && map.get(50)! > 0) {
        const value = map.get(50)!;
        const num = this.updateHelper(count, value, 50);
        count -= num * 50;
        res[1] = res[1] + num;
        map.set(50, map.get(50)! - num);
      }
      if (count >= 20 && map.get(20)! > 0) {
        const value = map.get(20)!;
        const num = this.updateHelper(count, value, 20);
        count -= num * 20;
        res[0] = res[0] + num;
        map.set(20, map.get(20)! - num);
      }

      if (count === 0) {
        this.map = map;
        return res;
      }
      if (count < 0) break;
      return [-1];
    }

    return [-1];
  }
}
