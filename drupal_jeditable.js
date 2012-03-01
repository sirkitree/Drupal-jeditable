(function ($) {
  Drupal.behaviors.jeditable = {
    attach: function(context) {
      $('.jeditable-textfield', context).editable('/jeditable/ajax/save', {
        indicator : 'Saving...',
        tooltip   : 'Click to edit...',
        cancel    : 'Cancel',
        submit    : 'Save',
        style     : 'display: inline; min-width: 100px;'
      });
      $('.jeditable-textarea', context).editable('/jeditable/ajax/save', {
        type      : 'textarea',
        indicator : 'Saving...',
        tooltip   : 'Click to edit...',
        cancel    : 'Cancel',
        submit    : 'Save'
      });
      $('.jeditable-select', context).editable('/jeditable/ajax/save', {
        loadurl  : '/jeditable/ajax/load',
        type     : 'select',
        submit   : 'OK',
        style    : 'display: inline'
      });
    }
  };
})(jQuery);
