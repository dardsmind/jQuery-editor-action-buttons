/*
 * jQuery editoractionbuttons: A tiny plugin to put edit, save and cancel button around inline editor area
 *
 * Copyright: Dario Mindoro (https://www.linkedin.com/in/dards/)
 *
 * Contributions and bug reports: https://github.com/dardsmind/jQuery-editor-action-buttons
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function( $ ) {
 
    $.fn.editorActionButtons = function(options) {
		
        var settings = $.extend({
            onSave: function() {},
			onEdit: function() {},
			onCancel: function() {} 			
        }, options );		
		
		var container = $(this);
		var btnGroup =$("<div class='btn-group pull-right btnEditorActionButtonGroup'><div>");
		var editButton=$("<button class='btn grey-mint btn-sm btn-outline '><i class='fa fa-pencil'></i></button>");
		var saveButton=$("<button class='btn grey-mint btn-sm btn-outline '><i class='fa fa-save'></i></button>");
		var cancelButton=$("<button class='btn grey-mint btn-sm btn-outline '><i class='fa fa-undo'></i></button>");
		btnGroup.append(editButton);
		btnGroup.append(saveButton);
		btnGroup.append(cancelButton);
		container.append(btnGroup);
		saveButton.hide();
		cancelButton.hide();
		editButton.on( "click", function(){
			saveButton.show();
			cancelButton.show();
			editButton.hide();
			settings.onEdit.call();
		});
		saveButton.on( "click", function(){
			saveButton.hide();
			cancelButton.hide();
			editButton.show();
			settings.onSave.call();			
		});
		cancelButton.on( "click", function(){
			saveButton.hide();
			cancelButton.hide();
			editButton.show();
			settings.onCancel.call();			
		});
        return this;
    };
 
}( jQuery ));
