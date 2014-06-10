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
                    <input type="radio" name="method[]" id="displacement_id1" value="1" checked onclick='chk_select(this.value)' ;>汽油
                </label>
                <label class="radio">
                    <input type="radio" name="method[]" id="displacement_id2" value="2" onclick='chk_select(this.value)' ;>柴油
                </label>                
                <select id="displacement_1" name="displacement_1" style="display:none">
                    <? foreach($displacement_datas as $displacement_data): ?>
                    <? if($displacement_data[ 'type']=='1' ) {?>
                    <option value="<?=$displacement_data['id']?>">
                        <? echo $displacement_data[ 'min']. "~".$displacement_data[ 'max'];?>
                    </option>
                    <? } ?>
                    <? endforeach; ?>
                </select>
                <select id="displacement_2" name="displacement_2" style="display:none" >
                    <? foreach($displacement_datas as $displacement_data): ?>
                    <? if($displacement_data[ 'type']=='2' ) {?>
                    <option value="<?=$displacement_data['id']?>">
                        <? echo $displacement_data[ 'min']. "~".$displacement_data[ 'max'];?>
                    </option>
                    <? } ?>
                    <? endforeach; ?>
                </select>
                &nbsp;<br>
                <select id='brand_id' name='brand_id' required>
                    <option value=false>請選擺品牌</option>
                    <? foreach($brand_datas as $brand_data): ?>
                    <option value="<?=$brand_data['id']?>">
                        <?=$brand_data[ 'name']?>
                    </option>
                    <? endforeach; ?>
                </select>
                <select id='type_id' name='type_id' style="display:none" required>
                    <option value=false>請選擇車型</option>
                </select>
                &nbsp;<br><br>
                <input type="text" class="input-block-level" name="fname" id="fname" placeholder="全名" required maxlength="40" />
                <input type="text" class="input-block-level" name="name" id="name" placeholder="簡稱" required maxlength="40" />
                <input type="text" class="input-block-level" name="cc" id="cc" placeholder="排氣量" required maxlength="40" />
                <input type="text" class="input-block-level" name="price" id="price" placeholder="牌價" required maxlength="40" />
                <input type="text" class="input-block-level" name="pic_url" id="pic_url" placeholder="圖片位置" required maxlength="40" />
                <select id='rate_id' name='rate_id' required>
                    <option value='0'>優惠貸款</option>
                    <? foreach($rate_dates as $rate_date): ?>
                    <option value="<?=$rate_date['id']?>">
                        <? echo $rate_date[ 'name']. " (貸款 ".$rate_date[ 'offer_loan']. ")" ?>
                    </option>
                    <? endforeach; ?>
                </select>
                <button type="submit" class="btn btn-success btn-large">
                    <i class="icon-plus icon-white"></i>新增</button>
            </form>
          </div>
      </div>
      <div id="success" class="row" style="display: none">
          <div class="span4">
              <div id="successMessage" class="alert alert-success">
              </div>
          </div>
      </div>
      <div id="error" class="row" style="display: none">
          <div class="span4">
              <div id="errorMessage" class="alert alert-error">
              </div>
          </div>
      </div>
  </div>

<script src="<?=base_url('js/jquery.js'); ?>"></script>
<script>
$(document).ready(function() {

var i = $("#formAdd input[type='radio']:checked").val();
var d_id = "displacement_"+i;  
  $("#"+d_id).fadeIn(1);
  
$('#brand_id').on('change', function() {
  var faction = "<?=site_url('carinfo/query_car_type'); ?>";
  $('#type_id')
    .fadeIn(1)
    .find('option')
    .remove()
    .end();

    $.ajax({
      url: faction,
      async: false,
      type: 'post',
      data: {
        id:this.value
      },      
      error: function (data) {
          result = false;
      },
      success: function (response) {
        var json = jQuery.parseJSON(response);

        if(json.status == 'Y')
        {
          $.each(json.data, function(key, value) {
             $('#type_id')                
                .append($("<option></option>")
                .attr("value",key)
                .text(value)); 
          });
        } else {
           $('#type_id')                
          .append($("<option></option>")
          .attr("value",'false')
          .text('－－－')); 
        }
          
      }
    });
});

$('#formAdd').submit(function() {
  
  var form = $(this);
  // form.children('button').prop('disabled', true);
  $('#success').hide();
  $('#error').hide();
  
  var faction = "<?=site_url('carinfo/add_data'); ?>";
  var fdata = form.serialize();
// alert(fdata);
// return;
  $.post(faction, fdata, function(rdata) {
    
      var json = jQuery.parseJSON(rdata);
      
      if (json.isSuccessful) {
          $('#successMessage').html(json.message);
          $('#success').show();
          $("#max").val('');
      } else {
          $('#errorMessage').html(json.message);
          $('#error').show();
      }
    
      form.children('button').prop('disabled', false);
      form.children('input[name="email"]').select();
  });
    
  return false;
});

$('#nav-car_info_add').addClass('active');

$('.content').fadeIn(1000);

});

function chk_select(val)
{
  if(val == '1'){    
    $("#displacement_1").fadeIn(1);
    $("#displacement_2").hide(1);
  } else {
    $("#displacement_2").fadeIn(1);
    $("#displacement_1").hide(1);
  }
}

</script>
<? $this->load->view('includes/footer'); ?>
