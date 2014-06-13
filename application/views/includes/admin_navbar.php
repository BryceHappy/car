<div class="navbar navbar-static-top">
  <div class="navbar-inner">
    <div class="container">
      <a class="brand" href="<?=site_url('admin'); ?>"><img src="<?=base_url('css/img/yourcontacts.png'); ?>"></a>
      <ul class="nav">
         <li id="nav-car_list"><?=anchor('carlist', '列表'); ?></li>
        <li class="divider-vertical"></li>
<!--         <li id="nav-add"><?=anchor('admin/add', '新增'); ?></li>
        <li class="divider-vertical"></li>
        <li id="nav-delete"><?=anchor('admin/delete', '刪除'); ?></li>
        <li class="divider-vertical"></li>
        <li id="nav-edit"><?=anchor('admin/edit', '編輯'); ?></li>
        <li class="divider-vertical"></li>   -->
        <li class="dropdown-submenu"><?=anchor('carrate', '貸款利率'); ?>
          <ul class="dropdown-menu">
            <li id="nav-car_rate"><?=anchor('carrate', '列表'); ?></li>
            <li id="nav-car_rate_add"><?=anchor('carrate/add', '新增'); ?></li>
            <li id="nav-car_rate_edit"><?=anchor('carrate', '刪除'); ?></li>
    
          </ul>
        </li> 
        <li class="divider-vertical"></li>		
        <li class="dropdown-submenu"><?=anchor('cardisplacement', '排氣'); ?>
          <ul class="dropdown-menu">
            <li id="nav-car_displacement"><?=anchor('cardisplacement', '列表'); ?></li>
            <li id="nav-car_displacement_add"><?=anchor('cardisplacement/add', '新增'); ?></li>
            <li id="nav-edit"><?=anchor('cardisplacement', '刪除'); ?></li>
            <li id="nav-edit"><?=anchor('cardisplacement', '修改'); ?></li>				
          </ul>
		    </li>
        <li class="divider-vertical"></li>  
        <li class="dropdown-submenu"><?=anchor('carbrand', '品牌'); ?>
          <ul class="dropdown-menu">
            <li id="nav-car_brand"><?=anchor('carbrand', '列表'); ?></li>
            <li id="nav-car_brand_add"><?=anchor('carbrand/add', '新增'); ?></li>
            <li id="nav-edit"><?=anchor('carbrand', '刪除'); ?></li>
            <li id="nav-edit"><?=anchor('carbrand', '修改'); ?></li>
            <li class="divider-vertical"></li>
            <li id="nav-car_type"><?=anchor('cartype', '車型列表'); ?></li>
            <li id="nav-car_type_add"><?=anchor('cartype/add', '新增車型'); ?></li>            
          </ul>
        </li>
        <li class="divider-vertical"></li>  
        <li class="dropdown-submenu"><?=anchor('carinfo', '車子'); ?>
          <ul class="dropdown-menu">
            <li id="nav-car_info"><?=anchor('carinfo', '列表'); ?></li>
            <li id="nav-car_info_add"><?=anchor('carinfo/add', '新增'); ?></li>
            <li id="nav-edit"><?=anchor('carinfo', '刪除'); ?></li>
            <li id="nav-edit"><?=anchor('carinfo', '修改'); ?></li>       
          </ul>
        </li> 
        <li class="divider-vertical"></li>		
      </ul>  
      <div class="pull-right">
        <small class="navbar-text">Admin: <?=anchor('admin/profile', $this->session->userdata('admin')); ?> </small>
        <a href="<?=site_url('adminlogin/logout'); ?>" class="btn btn-primary"><i class="icon-road icon-white"></i> Logout</a>
      </div>
    </div>
  </div>
</div>
