//=============================================================================
// MenuBackground.js
//=============================================================================
 
/*:
 * @plugindesc Adds custom background to your menu.
 * @author Mirai
 *
 * @param Filename
 * @desc Change the file name of the background.
 * Change the value to 'default' to erase the background.
 * Default: bg
 * @default bg
 */
 
(function() {
var parameters = PluginManager.parameters('MenuBackground');
Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    if (parameters['Filename'] == 'default') {
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    }
    else {
        this._backgroundSprite.bitmap = ImageManager.loadSystem(parameters['Filename'] || 'bg');
    }
    this.addChild(this._backgroundSprite);
};
 
})();
