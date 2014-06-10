<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Password
 *
 * @author Administrator
 * @package ajax
 */
class Password extends CI_Controller {
  
	/**
	 * Constructor. 
	 */
	function __construct()
	{
	  parent::__construct();
	  log_message('debug', 'Password initialised');
	}
	
	function index()
	{
        if (!$this->is_logged_in()) {
            $this->load->view('createPassword');
        } else {
            redirect('site');
        }
	}

} 
/* End of file password.php */
/* Location: ./application/controllers/password.php */