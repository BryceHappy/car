<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Carbrand extends CI_Controller 
{
    public function __construct()
    {
        parent::__construct();
        
        if (!$this->is_logged_in()) {
            redirect('adminlogin');
        }
    }
    
    public function index()
    {
        // print_r($this->session->userdata);
        // exit;
        $datas = $this->car_model->get_all_brand();
        $this->load->view('car/car_brand', array(
            'datas' => $datas
        ));
    }
    
    public function add()
    {
        $this->load->view('car/car_brand_add');
    }
    
    public function add_data()
    {
        sleep(1);
        $this->load->library('form_validation');

        $is_added = $this->car_model->add_brand($this->input->post());
        
        if ($is_added) {
            $message = "<strong>新增完成</strong> has been added!";
            $this->json_response(TRUE, $message);
        } else {
            $message = "<strong>新增</strong> already exists!";
            $this->json_response(FALSE, $message);
        }

        // if ($this->form_validation->run() == FALSE) {
        //     $message = "<strong>Adding</strong> failed!";
        //     $this->json_response(FALSE, $message);
        // } else {
        // }
    }
    
    public function delete()
    {
        $users = $this->user_model->get_emails();
        
        $this->load->view('admin/admin_delete', array(
            'users' => $users
        ));
    }
    
    public function delete_user()
    {
        sleep(1);
        $this->load->library('form_validation');
        $this->form_validation->set_rules('email', 'Email', 'required|max_length[40]|valid_email');
        
        if ($this->form_validation->run() == FALSE) {
            $message = "<strong>Deletion</strong> failed!";
            $this->json_response(FALSE, $message);
        } else {
            $email = $this->input->post('email');
            $this->user_model->delete($email);
            
            $message = "<strong>".$email."</strong> has been deleted!";
            echo json_encode(array(
                'isSuccessful' => TRUE,
                'message' => $message,
                'email' => $email
            ));
        }
    }
    
    public function edit()
    {
        $users = $this->user_model->get_emails();
        
        $this->load->view('admin/admin_edit', array(
            'users' => $users 
        ));
    }
    
    public function edit_user()
    {
        sleep(1);
        $this->load->library('form_validation');
        $this->form_validation->set_rules('email', 'Email', 'required|max_length[40]|valid_email');
        $this->form_validation->set_rules('pwd', 'Password', 'required|max_length[20]|alpha_numeric');
        
        if ($this->form_validation->run() == FALSE) {
            $message = "<strong>Editing</strong> failed!";
            $this->json_response(FALSE, $message);
        } else {
            $this->user_model->update($this->input->post('email'), $this->input->post('pwd'));
            
            $message = "Editing for <strong>".$this->input->post('email')."</strong> has been done!";
            $this->json_response(TRUE, $message);
        }
    }
    
    public function profile()
    {
        $this->load->view('admin/admin_profile');
    }
    
	public function edit_userpassword()
	{
		$users = $this->user_model->get_all();
		foreach ($users as $value)
		{
			$value['password']="";
			$value['password'] = $this->rand_password->random_password();
			$this->user_model->update_password($value['uid'], $value['password']);
			$ary_edit[$value['uid']] = $value['password'];
		}
		$json_message->status="success!";
		$json_message->data = $ary_edit;
		echo json_encode($json_message);
	}
	
	
    public function change_password()
    {
        sleep(1);
        $this->load->library('form_validation');
        $this->form_validation->set_rules('curpwd', 'Current Password', 'required|max_length[20]|alpha_numeric');
        $this->form_validation->set_rules('newpwd', 'New Password', 'required|max_length[20]|alpha_numeric');
        
        if ($this->form_validation->run() == FALSE) {
            $message = "<strong>Changing</strong> failed!";
            $this->json_response(FALSE, $message);
        } else {
            $pwd_valid = $this->admin_model->check_password(
                $this->session->userdata('admin'), $this->input->post('curpwd'));
            
            if ($pwd_valid) {   
                $this->admin_model->update_password(
                    $this->session->userdata('admin'), $this->input->post('newpwd'));
            
                $message = "<strong>Password</strong> has been changed!";
                $this->json_response(TRUE, $message);
            } else {
                $message = "<strong>Current Password</strong> is wrong!";
                $this->json_response(FALSE, $message);
            }
        }
    }
    
    private function is_logged_in()
    {
        return $this->session->userdata('is_admin');
    }

    private function json_response($successful, $message)
    {
        echo json_encode(array(
            'isSuccessful' => $successful,
            'message' => $message
        )); 
    }
	
	public function show_page()
	{
		 
		$this->load->model('page_model',"page");
		        $sql=array(
		                "select"=>"allarc.id,title,update,writer,name,addtable",
		                "order_by"=>"id",
		                "where"=>array("id",1),
		                "join"=>array("join1"=>array("arctype","typeid=arctype.id"),),
		                "get"=>'allarc',
		        );
		$result=$this->page->pagestart($sql,$page);
 
	}
}
/* End of file admin.php */
