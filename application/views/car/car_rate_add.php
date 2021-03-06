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
    <input type="text" class="input-block-level" name="name" id="name"  placeholder="專案名稱"  maxlength="40" />
    <input type="text" class="input-block-level" name="offer_loan" id="offer_loan"  placeholder="貸款金額" required maxlength="10" />
    <input type="text" class="input-block-level" name="offer_rate" id="offer_rate"  placeholder="利率" required maxlength="4" />
    <input type="text" class="input-block-level" name="offer_month" id="offer_month"  placeholder="分期數" required maxlength="10" />
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
    
    var faction = "<?=site_url('carrate/add_data'); ?>";
    var fdata = form.serialize();

    $.post(faction, fdata, function(rdata) {
      
        var json = jQuery.parseJSON(rdata);
        
        if (json.isSuccessful) {
            $('#successMessage').html(json.message);
            $('#success').show();
            $("#name").val('');
            $("#offer_loan").val('');
            $("#offer_rate").val('');
            $("#offer_month").val('');
        } else {
            $('#errorMessage').html(json.message);
            $('#error').show();
        }
      
        form.children('button').prop('disabled', false);
        // form.children('input[name="email"]').select();
    });
      
    return false;
  });

  $('#nav-car_rate_add').addClass('active');

  $('.content').fadeIn(1000);
});
</script>
<? $this->load->view('includes/footer'); ?>
