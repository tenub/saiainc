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
		$('input[placeholder], textarea[placeholder]').bind({
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
    $("#lookupSubmit").live('click', function(){
        $('.lookupContent').empty();
        $(".lookupContent").append('<table class="hor-minimalist1"><thead><tr><th colspan="2">SAIA (Common Stock)</th></tr></thead><tbody class="spanned"><tr><td class="required">Date Requested</td><td>08/13/12</td></tr><tr><td class="required">Closing Price</td><td>$22.53</td></tr><tr><td class="required">Volume</td><td>54,200</td></tr><tr><td class="required">Split Adjustment Factor</td><td>1:1</td></tr><tr><td class="required">Open</td><td>$22.25</td></tr><tr><td class="required">Day&#39;s High</td><td>$22.55</td></tr><tr><td class="required">Day&#39;s Low</td><td>$21.70</td></tr></tbody><tfoot><tr><td colspan="2" class="disclaimer">Data as of 08/14/12 4:00 PM ET. Minimum 20 minute delay. <a href="#">Refresh quote</a></td></tr></tfoot></table>');
        callback();
        return false;
    });
    $("#investSubmit").live('click', function(){
        $('.investContent').empty();
        $(".investContent").append('<table class="hor-minimalist1"><thead><tr><th colspan="2">SAIA (Common Stock)</th></tr></thead><tbody class="spanned"><tr><td class="required">Date Requested</td><td>08/13/12</td></tr><tr><td class="required">Closing Price</td><td>$22.53</td></tr><tr><td class="required">Shares Today</td><td>443.85</td></tr><tr><td class="required">Investment Value</td><td>10,284.07</td></tr><tr><td class="required">Percent Change</td><td>2.84%</td></tr></tbody><tfoot><tr><td colspan="2" class="disclaimer">Quotes delayed at least 15 minutes. Market data provided by <a href="http://www.interactivedata.com" target="_blank">Interactive Data</a>. <a href="http://www.interactivedata.com/index.php/Contents/show/content/quoteTerms" target="_blank">Terms &amp; Conditions</a>. Powered and implemented by <a href="http://www.interactivedata.com/idms" target="_blank">Interactive Data Managed Solutions</a>. <p class="disclaimer">Return calculations do not include reinvested cash dividends.</p></td></tr></tfoot></table>');
        callback();
        return false;
    });
});