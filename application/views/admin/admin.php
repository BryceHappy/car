<? $this->load->view('includes/header'); ?>
<? $this->load->view('includes/admin_navbar'); ?>
<div class="container">
<div class="content" style="display:none">
  <div class="page-header">
    <h2>Your Users</h2>
  </div>
  <div class="row">
    <div class="span9 offset1">
      <table class="table table-striped table-bordered tablesorter" id="tcontacts">
        <thead>
          <tr>
            <th><i class="icon-tags"></i> ID</th>
            <th><i class="icon-envelope"></i> Email</th>
            <th><i class="icon-list"></i> Contacts</th>
            <th><i class="icon-list"></i> password</th>
          </tr>
        </thead>
        <tbody>
        <?foreach($users as $user): ?>
          <tr>
            <td id="uid_<?=$user['uid']; ?>"><?=$user['uid']; ?></td>
            <td id="email_<?=$user['uid']; ?>"><?=$user['email']; ?></td>
            <td id="contacts_<?=$user['uid']; ?>"><?=$user['contacts']; ?></td>
            <td id="password_<?=$user['uid']; ?>"><?=$user['password']; ?></td>
          </tr>
          <? endforeach; ?>         
        </tbody>
      </table>
      <button type="submit" class="btn btn-warning btn-large" id="editEverybody">
      <i class="icon-pencil icon-white"></i> Edit Everybody User's Password</button>
    </div>
  </div>
</div>
</div>
<script src="<?=base_url('js/jquery.js'); ?>"></script>
<script src="<?=base_url('js/jquery.tablesorter.js'); ?>"></script>
<script>
$(document).ready(function(){

  $("#tcontacts").tablesorter();

  $(".content").fadeIn(1000);
  
  $('#editEverybody').click(function() {
    alert('ok');
    var faction = "<?=site_url('admin/edit_userpassword'); ?>";
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
