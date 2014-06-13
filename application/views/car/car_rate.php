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
            <th><i class="icon-tags"></i> ID</th>
            <th><i class="icon-envelope"></i> 專案名稱</th>
            <th><i class="icon-envelope"></i> 貸款金額</th>
            <th><i class="icon-envelope"></i> 利率</th>
            <th><i class="icon-envelope"></i> 分期數</th>            
          </tr>
        </thead>
        <tbody>
        <? foreach($datas as $data): ?>
          <tr>
            <td id="id_<?=$data['id']; ?>"><?=$data['id']; ?></td>
            <td id="name_<?=$data['id']; ?>"><a href="<? echo $url.$data['id'];?>"><?=$data['name']; ?></a></td>
            <td id="offer_loan_<?=$data['id']; ?>"><?=$data['offer_loan']; ?></td>
            <td id="offer_rate_<?=$data['id']; ?>"><?=$data['offer_rate']; ?></td>
            <td id="offer_month_<?=$data['id']; ?>"><?=$data['offer_month']; ?></td>            
          <? endforeach; ?>         
        </tbody>
      </table>
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
  
 $('#nav-car_rate').addClass('active');
   
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
