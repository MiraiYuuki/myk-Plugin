//=============================================================================
// Playtime.js
//=============================================================================
/*:
 * @plugindesc Add Playtime Window in Menu.
 * @author Mirai
*/

(function () {


Scene_Menu.prototype.update = function(){
	this._playtimeWindow.refresh();
};

var _SceneMenu_create = Scene_Menu.prototype.create
Scene_Menu.prototype.create = function() {
	_SceneMenu_create.call(this);
    this.createPlaytimeWindow();
};

Scene_Menu.prototype.createPlaytimeWindow = function() {
    this._playtimeWindow = new Window_Playtime(0, 0);
    this._playtimeWindow.y = Graphics.boxHeight - this._playtimeWindow.height - this._goldWindow.height;
    this.addWindow(this._playtimeWindow);
};

//-----------------------------------------------------------------------------
// Window_Playtime
//

function Window_Playtime() {
    this.initialize.apply(this, arguments);
}

Window_Playtime.prototype = Object.create(Window_Base.prototype);
Window_Playtime.prototype.constructor = Window_Playtime;

Window_Playtime.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Playtime.prototype.windowWidth = function() {
    return 240;
};

Window_Playtime.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_Playtime.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawText($gameSystem.playtimeText(), x, 0, width, 'right');
};

Window_Playtime.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};
})();
