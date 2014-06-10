<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Rand_password
 *
 * @author Administrator
 * @package ajax
 */
class Rand_password extends CI_Model {
	
	/**
	 * Constructor. 
	 */
	function __construct()
	{
		parent::__construct();
		log_message('debug', 'Rand_password initialised');
	}

	function random_password() 
	{
	    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789!@#$%^&*()=?";
	    $pass = array(); //remember to declare $pass as an array
	    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
	    for ($i = 0; $i <= 8; $i++) {
	        $n = rand(0, $alphaLength);
	        $pass[] = $alphabet[$n];
	    }
		
		if (strlen(implode($pass)) < 8)
		{
			$this->random_password();
		} else{
			return implode($pass); //turn the array into a string
		} 
	    
	}

	
} 
/* End of file rand_password.php */
/* Location: ./application/models/rand_password.php */