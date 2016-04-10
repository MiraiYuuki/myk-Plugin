//=============================================================================
// EquipIconArrow.js
//=============================================================================

/*:
 * @plugindesc Change Equip right arrow to up/down icon instead of just "->".
 * @author Mirai
 * 
 * @param Icon Up
 * @desc The Icon Index that will be used when the new value is greater than the current value.
 * @default 73
 *
 * @param Icon Down
 * @desc The Icon Index that will be used when the new value is smaller than the current value.
 * @default 74
 *
 * @param Icon Equal
 * @desc Icon Index for equal.
 * change this to 0 to make it appear as "=".
 * @default 75
 *
 */

(function() {
var parameters = PluginManager.parameters('EquipIconArrow');
var iconUp = parseInt(parameters['Icon Up'] || 73);
var iconDw = parseInt(parameters['Icon Down'] || 74);
var iconE = parseInt(parameters['Icon Equal'] || 75);
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    this.drawParamName(x + this.textPadding(), y, paramId);
    if (this._actor) {
        this.drawCurrentParam(x + 140, y, paramId);
    }
    if (this._tempActor) {
    	this.drawRightArrow(0, x + 188, y, paramId);
        this.drawNewParam(x + 222, y, paramId);
    }
};

Window_EquipStatus.prototype.drawRightArrow = function(iconIndex, x, y, paramId) {
	var newValue = this._tempActor.param(paramId);
	this.changeTextColor(this.systemColor());
	if (newValue > this._actor.param(paramId)) {
		this.drawIcon(iconUp, x, y, 32, 'center');
	}
	else if (newValue < this._actor.param(paramId)) {
		this.drawIcon(iconDw, x, y, 32, 'center');
	}
	else {
		if (iconE == '0'){
		this.drawText('=', x, y, 32, 'center');
		}
		else{
		this.drawIcon(iconE, x, y, 32, 'center');
		}
	}
};

})();
