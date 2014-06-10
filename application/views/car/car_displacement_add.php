<? $this->load->view('includes/header'); ?>
<? $this->load->view('includes/admin_navbar'); ?>
<div class="container">
<div class="content" style="display:none">
  <div class="page-header">
    <h2>+</h2>
  </div>
  <div class="row">
    <div class="span4">
      <form id="formAdd" class="well">
        <label class="radio">
		  <input type="radio" name="type[]" id="type1" value="1" checked>
      汽油
		</label>
        <label class="radio">
		  <input type="radio" name="type[]" id="type2" value="2" >
		  柴油
		</label>		
    <input type="text" class="input-block-level" name="min" id="min"  placeholder="最小排氣量" required maxlength="4" />
		<input type="text" class="input-block-level" name="max" id="max" placeholder="最大排氣量" required maxlength="4" />		
		<input type="text" class="input-block-level" name="license_tax" id="license_tax"  placeholder="牌照稅" required maxlength="6" />
    <input type="text" class="input-block-level" name="fuel_tax" id="fuel_tax" placeholder="燃料稅" required maxlength="20" />
        <button type="submit" class="btn btn-success btn-large">
        <i class="icon-plus icon-white"></i>新增</button>
      </form>
    </div>
  </div>
  <div id="success" class="row" style="display: none">
    <div class="span4">
      <div id="successMessage" class="alert alert-success"></div>
    </div>
  </div>
  <div id="error" class="row" style="display: none">
    <div class="span4">
      <div id="errorMessage" class="alert alert-error"></div>
    </div>
  </div>
</div>

<script src="<?=base_url('js/jquery.js'); ?>"></script>
<script>
$(document).ready(function() {
  
  $('#formAdd').submit(function() {
    
    var form = $(this);
    form.children('button').prop('disabled', true);
    $('#success').hide();
    $('#error').hide();
    
    var faction = "<?=site_url('cardisplacement/add_data'); ?>";
    var fdata = form.serialize();

    $.post(faction, fdata, function(rdata) {

        var json = jQuery.parseJSON(rdata);
        
        if (json.isSuccessful) {
            $('#successMessage').html(json.message);
            $('#success').show();
            $("#max").val('');
            $("#min").val('');
            $("#license_tax").val('');
            $("#fuel_tax").val('');
        } else {
            $('#errorMessage').html(json.message);
            $('#error').show();
        }
      
        form.children('button').prop('disabled', false);
        form.children('input[name="email"]').select();
    });
      
    return false;
  });

  $('#nav-car_displacement_add').addClass('active');

  $('.content').fadeIn(1000);
});
</script>
<? $this->load->view('includes/footer'); ?>
