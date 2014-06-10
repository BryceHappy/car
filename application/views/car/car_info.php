<? $this->load->view('includes/header'); ?>
<? $this->load->view('includes/admin_navbar'); ?>
<div class="container">
<div class="content" style="display:none">
  <div class="page-header">
    <h2>Your datas</h2>
  </div>
  <div class="row">
    <div class="span9 offset1">
      <table class="table table-striped table-bordered tablesorter" id="tcontacts">
        <thead>
          <tr>
            <!-- <th><i class="icon-tags"></i> ID</th> -->
            <th><i class="icon-tags"></i> 品牌</th>
            <th><i class="icon-tags"></i> 車型</th>
            <th><i class="icon-tags"></i> 全名</th>
            <th><i class="icon-tags"></i> 簡稱</th>
            <th><i class="icon-tags"></i> 排氣量</th>
            <th><i class="icon-tags"></i> 售價</th>
            <th><i class="icon-tags"></i> 優惠</th>
          </tr>
        </thead>
        <tbody>
        <? foreach($datas['results'] as $data): ?>
          <tr>
            <!-- <td id="id_<?=$data['id']; ?>"><?=$data['id']; ?></td> -->
            <td id="brand_name_<?=$data['id']; ?>"><?=$data['brand_name']; ?></td>
            <td id="type_name_<?=$data['id']; ?>"><?=$data['type_name']; ?></td>            
            <td id="fname_<?=$data['id']; ?>"><?=$data['fname']; ?></td>
            <td id="name_<?=$data['id']; ?>"><?=$data['name']; ?></td>
            <td id="cc_<?=$data['id']; ?>"><?=$data['cc']; ?></td>
            <td id="price_<?=$data['id']; ?>"><?=$data['price']; ?></td>
            <td id="rate_<?=$data['id']; ?>"><?=$data['rate_name']; ?></td>            
          <? endforeach; ?>         
        </tbody>
      </table>
                <?php echo $this->pagination->create_links(); ?>
      <button type="submit" class="btn btn-warning btn-large" id="editEverybody">
      <i class="icon-pencil icon-white"></i> Edit Everybody data's Password</button>
    </div>
  </div>
</div>
<script src="<?=base_url('js/jquery.js'); ?>"></script>
<script src="<?=base_url('js/jquery.tablesorter.js'); ?>"></script>
<script>
$(document).ready(function(){

  $("#tcontacts").tablesorter();

  $(".content").fadeIn(1000);
  
 $('#nav-car_info_add').addClass('active');
   
  $('#editEverybody').click(function() {
    
    var faction = "<?=site_url('admin/edit_datapassword'); ?>";
    var fdata = "changeEverybodyPass";


 	$.ajax({
         url: faction,
         cache: false,
         dataType: 'html',
         type:'POST',
         data: fdata,
         error: function(xhr) {
           alert('Ajax request 發生錯誤');
         },
         success: function(data) {
	        var json = jQuery.parseJSON(data);
			 	$.each(json.data, function( index,value ) {
				  // console.log( index + ": " + value );
				  // alert(index + ": " + value);
				  $("#password_"+index).html("");
				  $("#password_"+index).html(value).fadeIn(400);
				});
			}
     });

    return false;
  });
  
  
});
</script>
<? $this->load->view('includes/footer'); ?>
