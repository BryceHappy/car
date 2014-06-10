<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Category
 *
 * @author Administrator
 * @package ajax
 */
class Category extends CI_Controller {
  
	/**
	 * Constructor. 
	 */
	function __construct()
	{
	  parent::__construct();
	  log_message('debug', 'Category initialised');
	}
	
	public function index()
	{
		echo "hello";
	}

} 
/* End of file category.php */
/* Location: ./application/controllers/admin/admin_con/category.php */