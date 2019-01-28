import 'fabric';
import 'tui-code-snippet';
import 'file-saver';
import 'tui-color-picker';

import './js/polyfill';
import ImageEditor from './js/imageEditor';
import './css/index.styl';

// commands
import './js/command/addIcon';
import './js/command/addImageObject';
import './js/command/addObject';
import './js/command/addShape';
import './js/command/addText';
import './js/command/applyFilter';
import './js/command/changeIconColor';
import './js/command/changeShape';
import './js/command/changeText';
import './js/command/changeTextStyle';
import './js/command/clearObjects';
import './js/command/flip';
import './js/command/loadImage';
import './js/command/removeFilter';
import './js/command/removeObject';
import './js/command/resizeCanvasDimension';
import './js/command/rotate';
import './js/command/setObjectProperties';
import './js/command/setObjectPosition';

// module.exports = ImageEditor;

import whiteTheme from './js/theme/white-theme.js';
import blackTheme from './js/theme/black-theme.js';

export function createView(container, path, useBlackTheme, onSave) {
    const imageEditor = new ImageEditor(container, onSave, {
        includeUI: {
            loadImage: {
                path,
                name: 'ozoneImage'
            },
            theme: useBlackTheme ? blackTheme : whiteTheme,
            initMenu: 'filter',
            menuBarPosition: 'bottom'
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500
    });

    window.onresize = function() {
        imageEditor.ui.resizeEditor();
    };
}
window.createToastEditorView = createView;
module.exports = createView;
