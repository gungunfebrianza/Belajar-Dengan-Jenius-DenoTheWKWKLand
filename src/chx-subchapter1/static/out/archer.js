var Archer = /** @class */ (function () {
    function Archer() {
    }
    Archer.prototype.shoot = function () {
        Archer.totalArrow--;
        console.log("Total Arrow left : " + Archer.totalArrow);
    };
    Archer.totalArrow = 20;
    return Archer;
}());
var Maudy = new Archer();
Maudy.shoot();
var Gun = new Archer();
Gun.shoot();
/* output :
  Total Arrow left : 19
  Total Arrow left : 18 */
//# sourceMappingURL=archer.js.map