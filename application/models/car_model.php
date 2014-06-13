<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Car_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }

	function get_all_displacement()
	{
        $datas = $this->db->order_by('type')->order_by('max')
            ->get('car_displacement')
            ->result_array();
			
		return $datas;
	}
	
    function get_all_brand()
    {
        $datas = $this->db->order_by('name')
            ->get('car_brand')
            ->result_array();
            
        return $datas;
    }

    function get_all_type()
    {
        $this->db->select('car_type.id,car_type.name as type_name,car_brand.name');
        $this->db->from('car_type');
        $this->db->join('car_brand', 'car_type.brand_id = car_brand.id');        
        $this->db->order_by('car_type.brand_id')->order_by('car_type.name');
            
        $datas = $this->db->get()->result_array();
            
        return $datas;
    }

    function get_all_car()
    {
        $datas = $this->db->order_by('bname')
        ->order_by('tname')
        ->order_by('fnam')
        ->get('view_car_all_info')
        ->result_array();

        return $datas;
    }

    function get_all_info($num=null,$offset=null)
    {
        $this->db->select('car_info.id,car_type.name as type_name,car_brand.name AS brand_name,car_info.price,car_info.cc,car_info.name,car_info.fname,car_rate.name as rate_name');
        $this->db->from('car_info');
        $this->db->join('car_brand', 'car_info.brand_id = car_brand.id', 'left');
        $this->db->join('car_rate', 'car_info.rate_id = car_rate.id', 'left');      
        $this->db->join('car_type', 'car_info.type_id = car_type.id', 'left');
        $this->db->join('car_displacement', 'car_info.displacement_id = car_displacement.id', 'left');
        $this->db->order_by('car_brand.name');
        $this->db->order_by('car_type.name');
        $this->db->order_by('car_info.name');
        // if($num != "" && $offset != "")
        $this->db->limit($num,$offset);
            
        $datas = $this->db->get()->result_array();
            
        return $datas;
    }

    public function get_all_rate($id = null)
    {
        $this->db->order_by('id');

        if(!empty($id))
        $this->db->where('id', $id);
// print_r($id);
// exit;
        $users = $this->db->get('car_rate')->result_array();

        return $users;
    }

    public function get_id($email)
    {
        $row = $this->db->get_where('users', array('email' => $email))->row();
        
        return $row->uid;
    }

    public function get_admin_id($name, $password)
    {
        $row = $this->db->get_where('admins', array('name' => $name, 'password' => $password))->row();
        
        return $row->aid;
    }	
	
    public function get_emails()
    {
        $users = $this->db->select('email')
            ->order_by('email')
            ->get('users')
            ->result_array();

        return $users;
    }

    public function add_displacement($data)
    {
        // $query = $this->db->get_where('users', array('email' => $email));
        
        // if ($query->num_rows == 1) {
        //     return FALSE;
        // }

        foreach($data as $key => $value)
        {
            if(is_array($value))
            {
                foreach($value as $k => $v)
                    $data[$key] = $v;
            }             
        }

        $v = $this->cteator();
        $data = $data + $v;
        $this->db->insert('car_displacement', $data); 
        
        return TRUE;
    }

    public function add_brand($data)
    {
        $query = $this->db->get_where('car_brand', array('name' => $data['name']));
        
        if ($query->num_rows == 1) {
            return FALSE;
        }

        foreach($data as $key => $value)
        {
            if(is_array($value))
            {
                foreach($value as $k => $v)
                    $data[$key] = $v;
            }             
        }

        $v = $this->cteator();
        $data = $data + $v;
        $this->db->insert('car_brand', $data); 
        
        return TRUE;
    }

    public function add_type($data)
    {
        $query = $this->db->get_where('car_type', array('name' => $data['name']));
        
        if ($query->num_rows == 1) {
            return FALSE;
        }

        foreach($data as $key => $value)
        {
            if(is_array($value))
            {
                foreach($value as $k => $v)
                    $data[$key] = $v;
            }             
        }

        $v = $this->cteator();
        $data = $data + $v;

        $this->db->insert('car_type', $data); 
        
        return TRUE;
    }

    public function add_info($data)
    {
        $query = $this->db->get_where('car_info', array('fname' => $data['fname']));
        
        if ($query->num_rows == 1) {
            return FALSE;
        }

        foreach($data as $key => $value)
        {
            if(is_array($value))
            {
                foreach($value as $k => $v)
                    $data[$key] = $v;
            }             
        }

        $v = $this->cteator();
        $data = $data + $v;
        $this->db->insert('car_info', $data); 
        
        return TRUE;
    }

    public function add_rate($data)
    {
        $query = $this->db->get_where('car_rate', array('name' => $data['name']));
        
        if ($query->num_rows == 1) {
            return FALSE;
        }

        foreach($data as $key => $value)
        {
            if(is_array($value))
            {
                foreach($value as $k => $v)
                    $data[$key] = $v;
            }             
        }

        $v = $this->cteator();
        $data = $data + $v;
        $this->db->insert('car_rate', $data); 
        
        return TRUE;
    }

    public function cteator()
    {        
        $data['cdate'] = date("Y-m-d H:m:s");
        $data['creator'] = $this->session->userdata['aid'];

        return $data;
    }

    public function modifier()
    {        
        $data['mdate'] = date("Y-m-d H:m:s");
        $data['modifier'] = $this->session->userdata['aid'];

        return $data;
    }

    public function query_car_type($id)
    {
        $data = $this->db->get_where('car_type', array('brand_id' => $id))->result_array();
        return $data;
    }

    public function delete($email)
    {
        $uid = $this->db->get_where('users', array('email' => $email))->row()->uid;
        
        $this->db->delete('contacts', array('uid' => $uid));
        
        $this->db->delete('users', array('email' => $email));
    }

    public function update($table, $key = array(), $data = array())
    {
        $u = $this->modifier();
        $data = array_merge($data,$u);
        // $this->db->update($table, $data);

        $this->db->where($key);
        $this->db->update($table, $data); 
    }

    public function check_password($uid, $password)
    {
        $check = $this->db->get_where('users', array('uid' => $uid, 'password' => $password));
        
        return ($check->num_rows == 1) ? TRUE : FALSE;
    }

    public function update_password($uid, $password)
    {
		print_r($this->session->userdata);
		exit;
        return $this->db->update('users', array('password' => $password), array('uid' => $uid));
    }

    public function is($email, $password)
    {
        $query = $this->db->get_where('users', array('email' => $email, 'password' => $password));
        
        return ($query->num_rows == 1) ? TRUE : FALSE;
    }
}
