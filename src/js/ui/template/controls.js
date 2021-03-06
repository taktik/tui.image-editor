export default ({locale, iconStyle: {normal, hover, disabled}, downloadButtonStyle}) => (`
    <div class="tui-image-editor-controls">
        <ul class="tui-image-editor-menu">
            <li id="tie-btn-undo" class="tui-image-editor-item" title="${locale.localize('Undo')}">
                <svg class="svg_ic-menu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-undo" class="enabled"/>
                    <use xlink:href="${disabled.path}#${disabled.name}-ic-undo" class="normal"/>
                    <use xlink:href="${hover.path}#${hover.name}-ic-undo" class="hover"/>
                </svg>
            </li>
            <li id="tie-btn-redo" class="tui-image-editor-item" title="${locale.localize('Redo')}">
                <svg class="svg_ic-menu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-redo" class="enabled"/>
                    <use xlink:href="${disabled.path}#${disabled.name}-ic-redo" class="normal"/>
                    <use xlink:href="${hover.path}#${hover.name}-ic-redo" class="hover"/>
                </svg>
            </li>
            <li id="tie-btn-reset" class="tui-image-editor-item" title="${locale.localize('Reset')}">
                <svg class="svg_ic-menu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-reset" class="enabled"/>
                    <use xlink:href="${disabled.path}#${disabled.name}-ic-reset" class="normal"/>
                    <use xlink:href="${hover.path}#${hover.name}-ic-reset" class="hover"/>
                </svg>
            </li>
            <li class="tui-image-editor-item">
                <div class="tui-image-editor-icpartition"></div>
            </li>
            <li id="tie-btn-delete" class="tui-image-editor-item" title="${locale.localize('Delete')}">
                <svg class="svg_ic-menu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-delete" class="enabled"/>
                    <use xlink:href="${disabled.path}#${disabled.name}-ic-delete" class="normal"/>
                    <use xlink:href="${hover.path}#${hover.name}-ic-delete" class="hover"/>
                </svg>
            </li>
            <li id="tie-btn-delete-all" class="tui-image-editor-item" title="${locale.localize('Delete-all')}">
                <svg class="svg_ic-menu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-delete-all" class="enabled"/>
                    <use xlink:href="${disabled.path}#${disabled.name}-ic-delete-all" class="normal"/>
                    <use xlink:href="${hover.path}#${hover.name}-ic-delete-all" class="hover"/>
                </svg>
            </li>
            <li class="tui-image-editor-item">
                <div class="tui-image-editor-icpartition"></div>
            </li>
        </ul>

        <div class="tui-image-editor-controls-buttons">
            <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                ${locale.localize('Save...')}
            </button>
        </div>
    </div>
`);
