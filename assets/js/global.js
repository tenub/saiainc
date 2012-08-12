$(document).ready(function(){

	// Initialize basic elements
    
	callback();
	$(".cbOpen").colorbox();
	$(document).bind('cbox_complete', function(){
	    $('#colorbox .select:not([multiple])').selectbox();
	    $.fn.colorbox.resize();
	    callback();
	});
	
	// Callback function for site wide JS enhancements

	function callback() {
		$('input[placeholder]').each(function(){
			$(this).val($(this).attr('placeholder'));
		});
        $('textarea[placeholder]').each(function(){
            $(this).val($(this).attr('placeholder'));
        });
        if ($(this).hasClass('required')) {
            $('input[placeholder]').css('color','#333');
            $('textarea[placeholder]').css('color','#333');
        }
		$('input[placeholder]').unbind('click');
        $('textarea[placeholder]').unbind('click');
		$('input[placeholder]').unbind('focusout');
        $('textarea[placeholder]').unbind('focusout');
		$('input[placeholder]').unbind('keydown');
        $('textarea[placeholder]').unbind('keydown');
		$('input[placeholder]').bind({
		    click : function() {
		        $(this).css('color','#333');
		    },
		    focusout : function() {
                if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                    $(this).addClass('placeholder');
                    $(this).val($(this).attr('placeholder'));
                    if ($(this).hasClass('required')) {
                        $(this).css('color','#333');
                    }
                    else {
                        $(this).css('color','#aaa');
                    }
                }
            },
		    focusin : function() {
		        if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                    $(this).removeClass('placeholder');
                }
		        $(this).css('color','#333');
		        $(this).unbind('keydown');
		        $(this).unbind('click');
		    },
		});
        $('textarea[placeholder]').bind({
            click : function() {
                $(this).css('color','#333');
            },
            focusout : function() {
                if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                    $(this).addClass('placeholder');
                    $(this).val($(this).attr('placeholder'));
                    if ($(this).hasClass('required')) {
                        $(this).css('color','#333');
                    }
                    else {
                        $(this).css('color','#aaa');
                    }
                }
            },
            focusin : function() {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                    $(this).removeClass('placeholder');
                }
                $(this).css('color','#333');
                $(this).unbind('keydown');
                $(this).unbind('click');
            },
        });
	}
	
	// Handle dynamic content
	
	$(".cbClose").live('click', function(){$.colorbox.close();});
    $("#lbContent .cbFind").live('click', function(){
        $("#lightBox .login").append("<div class='disabled'></div>");
        $("#lightBox .register").load("modals/candidate-login-2.html", function(){
        	callback();
        });
        return false;
    });
    $("#lbContent .cbEmployeeFind").live('click', function(){
        $("#lightBox .login").append("<div class='disabled'></div>");
        $("#lightBox .forgot").show();
        $.fn.colorbox.resize();
        return false;
    });
    $("#lbContent .cbEpayRegister").live('click', function(){
        $("#lightBox .content").append("<div class='disabled'></div>");
        $("#lightBox .epayRegister").show();
        $.fn.colorbox.resize();
        return false;
    });
    $("#lbContent .cbCustFind").live('click', function(){
        $("#lightBox .login").append("<div class='disabled'></div>");
        $("#lightBox .register").load("modals/customer-login-2.html", function(){
            callback();
        });
        return false;
    });
    $("#shiptrack_select_container li").live('click', function(){
    	var lb = $("#lbContent .select option:selected").val();
        $("#lightBox .login").append("<div class='disabled'></div>");
        $("#lightBox .content").load("modals/ship-tracking-" + lb + ".html", function(){
            $.fn.colorbox.resize();
            $('.content .select:not([multiple])').selectbox();
            callback();
        });
        return false;
    });
    $("#dvr_document_container li").live('click', function(){
        var lb = $("#lbContent .select option:selected").val();
        $("#lightBox .login").append("<div class='disabled'></div>");
        $("#lightBox .docViewContent").load("modals/doc-view-" + lb + ".html", function(){
            $.fn.colorbox.resize();
            $('.docViewContent .select:not([multiple])').selectbox();
            callback();
        });
        return false;
    });
    $("#quoteDropdown_container li").live('click', function(){
    	var lb = $(this).attr('id').replace('quoteDropdown_input_', '');
        $(".quoteContent").load("modals/large/quote-" + lb + ".shtml", function(){
        	$('.quoteContent .select:not([multiple])').selectbox();
        	callback();
        });
        return false;
    });
    $("#timesDropdown_container li").live('click', function(){
    	var lb = $(this).attr('id').replace('timesDropdown_input_', '');
        $(".transitContent").load("modals/large/transit-" + lb + ".shtml", function(){
        	callback();
            $('.transitContent .select:not([multiple])').selectbox();
            $("input[name$='disposition']").click(function() {
                var test = $(this).val();
                $("div.desc").hide();
                $("#" + test).show();
            });
            $("input[name$='points']").click(function() {
                var test = $(this).val();
                $("div.desc1").hide();
                $("#" + test).show();
            });
        });
        return false;
    });
    $("#toolsDropdown_container li").live('click', function(){
        var lb = $(this).attr('id').replace('toolsDropdown_input_', '');
        $(".toolsContent").load("modals/large/shipping-tools-" + lb + ".shtml", function(){
            $('.toolsContent .select:not([multiple])').selectbox();
            callback()
        });
        return false;
    });
    $("#shipmentDropdown_container li").live('click', function(){
        var lb = $(this).attr('id').replace('shipmentDropdown_input_', '');
        $(".shipmentContent").load("modals/large/create-shipment-" + lb + ".shtml", function(){
        	$('.shipmentContent .select:not([multiple])').selectbox();
        	callback()
        });
        return false;
    });
});