<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Adminlogin extends CI_Controller
{
    public function index()
    {
        if (!$this->is_logged_in()) {
            $this->load->view('admin/admin_login');
        } else {
            redirect('admin');
        }
    }
    
    public function check()
    {           
        $this->load->library('form_validation');
        $this->form_validation->set_rules('admin', 'Admin', 'required|max_length[40]|alpha_numeric');
        $this->form_validation->set_rules('pwd', 'Password', 'required|max_length[20]|alpha_numeric');
        
        if ($this->form_validation->run() == FALSE) {
            redirect('login/error');
        } else {
            $admin = $this->input->post('admin');
			$password = $this->input->post('pwd');
            $is_admin = $this->admin_model->is($admin, $password);
  
            if ($is_admin) {
		      $aid = $this->user_model->get_admin_id($admin, $password);

                $data = array(
                    'is_logged_in' => FALSE,
                    'is_admin' => TRUE,
                    'admin' => $admin,
                    'aid' => $aid 
                );
                $this->session->set_userdata($data);
                // print_r($this->session->userdata);
                // exit;
                redirect('carinfo');
            } else {
                redirect('adminlogin/error');
            }
        }
    }
    
    public function error()
    {
        $this->load->view('admin_login', array('error' => TRUE));
    }
    
    public function logout()
    {
        if (!$this->is_logged_in()) {
            redirect('login');
        } else {
            $this->session->set_userdata(array('is_admin' => FALSE));
            $this->session->sess_destroy();
            $this->load->view('admin/admin_login');
        }
    }
    
    private function is_logged_in()
    {
        return $this->session->userdata('is_admin');
    }
}
/*End of file adminlogin.php*/
