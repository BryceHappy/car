<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Carlist extends CI_Controller 
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
        $datas = $this->car_model->get_all_car();
        $brand_ary = array();
        $type_ary = array();
        $s = 0;
        foreach ($datas as $key => $value) {

               if(!in_array($value['bid'],$brand_ary))
                    $brand_ary[] = $value['bid'];
                if(!in_array($value['tid'],$type_ary)){
                    $type_ary[] = $value['tid'];
                    $s = 0;                   
                }

                $tmp[$value['bname']][$value['tname']][$key]['key'] = $s;
                $tmp[$value['bname']][$value['tname']][$key]['fnam'] = $value['fnam'];
                $tmp[$value['bname']][$value['tname']][$key]['nam'] = $value['nam'];
                $tmp[$value['bname']][$value['tname']][$key]['img'] = base_url("img/".$value['pic_url']);
                $tmp[$value['bname']][$value['tname']][$key]['price'] = $value['price'];
                $tmp[$value['bname']][$value['tname']][$key]['cc'] = $value['cc'];
               if(empty($value['offer_loan']))
                $value['offer_loan'] = '0';
               $tmp[$value['bname']][$value['tname']][$key]['offer_loan'] = $value['offer_loan'];
               if(empty($value['offer_rate']))
                $value['offer_rate'] = '0';
               $tmp[$value['bname']][$value['tname']][$key]['offer_rate'] = $value['offer_rate'];
               if(empty($value['offer_month']))
                $value['offer_month'] = '0';
               $tmp[$value['bname']][$value['tname']][$key]['offer_month'] = $value['offer_month'];
               $s++;
        }
        // print_r($tmp);
        // exit;
        $datas = json_encode($tmp);
        
        $this->load->view('car/car_list', array(
            'datas' => $datas
        ));
    }
    
    public function add()
    {
        $brand_datas = $this->car_model->get_all_brand();
        $displacement_datas = $this->car_model->get_all_displacement();
        $rate_dates = $this->car_model->get_all_rate();
        $this->load->view('car/car_info_add',array(
            'brand_datas' => $brand_datas,
            'displacement_datas' => $displacement_datas,
            'rate_dates' => $rate_dates
            ));
    }
    
    public function add_data()
    {
        sleep(1);
        $this->load->library('form_validation');
        $insert_data = $this->input->post();
        $num = $insert_data['method'][0];
        $tmp_value = $insert_data['displacement_'.$num];
        unset($insert_data['method'],$insert_data['displacement_1'],$insert_data['displacement_2']);
        $insert_data['displacement_id'] = $tmp_value;

        $is_added = $this->car_model->add_info($insert_data );
        
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

    public function query_car_type()
    {
        $brand_id = $this->input->post('id');
        $data = $this->car_model->query_car_type($brand_id);
        if(count($data)>0){
            foreach ($data as $key => $value) {
                $tmp[$value['id']] = $value['name'];
            }
            $json_message->status="Y";
            $json_message->data = $tmp;
        } else {
            $json_message->status="N";
        }

        echo json_encode($json_message);
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
