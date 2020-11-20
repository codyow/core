CKEDITOR.plugins.add('tip-content-block', {
    requires: 'widget',
    commandName: 'tip-content-block-init',
    label: 'Show IF Content Block',
    init: function (editor) {
        editor.addContentsCss(this.path + 'styles/backend.css');
        editor.widgets.add('tip-content-block-init', {
            template: '<div class="conference-note"><img src="https://cdn.filestackcontent.com/MTJTYRS9KLgaR1ZhKj1Q?info.svg" style="height:2em; margin-right:1em; width:2em"><div class="conference-note-content"></div></div>',
            editables: {
                content: {
                    selector: '.conference-note-content'
                }
            },
            parts: {
                content: '.tip-content-block',
                inner: '.conference-note-content',
            },
            upcast: function (element) {
                return element.hasClass('tip-content-block');
            },
            dialog: 'tip-content-block-dialog',
            init: function () {
                this.setData('placeholder', this.element.data('placeholder'));
                this.setData('customClass', this.element.data('class'));
            },
            data: function () {
                this.element.data('placeholder', this.data.placeholder);
                this.handleCustomClasses();
            },
            handleCustomClasses: function () {
                // handle custom css classes
                var data = this.data;
                var elem = this.element;
                var i, oldClasses, newClasses;

                newClasses = (!!data.customClass) ? data.customClass.split(' ') : [''];
                oldClasses = (!!elem.data('class')) ? elem.data('class') : '';

                i = newClasses.length - 1;
                do {
                    if (!!newClasses[i]) {
                        elem.addClass(newClasses[i]);
                        oldClasses = oldClasses.replace(newClasses[i], '');
                    }
                } while (i--);

                oldClasses = oldClasses.split(' ');
                i = oldClasses.length - 1;
                do {
                    if (!!oldClasses[i]) elem.removeClass(oldClasses[i]);
                } while (i--);

                elem.data('class', data.customClass);
            },
        });

        // add the dialog file to the widget
        CKEDITOR.dialog.add('tip-content-block-dialog', this.path + 'dialogs/dialog.js');
    }
});
