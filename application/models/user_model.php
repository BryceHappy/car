<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }

    public function get_all()
    {
        $users = $this->db->order_by('uid')
            ->get('users')
            ->result_array();

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

    public function add($email, $password)
    {
        $query = $this->db->get_where('users', array('email' => $email));
        
        if ($query->num_rows == 1) {
            return FALSE;
        }
        
        $this->db->insert('users', array('email' => $email, 'password' => $password)); 
        
        return TRUE;
    }

    public function delete($email)
    {
        $uid = $this->db->get_where('users', array('email' => $email))->row()->uid;
        
        $this->db->delete('contacts', array('uid' => $uid));
        
        $this->db->delete('users', array('email' => $email));
    }

    public function update($email, $password)
    {
        $this->db->update('users', array('password' => $password), array('email' => $email));
    }

    public function check_password($uid, $password)
    {
        $check = $this->db->get_where('users', array('uid' => $uid, 'password' => $password));
        
        return ($check->num_rows == 1) ? TRUE : FALSE;
    }

    public function update_password($uid, $password)
    {
        return $this->db->update('users', array('password' => $password), array('uid' => $uid));
    }

    public function is($email, $password)
    {
        $query = $this->db->get_where('users', array('email' => $email, 'password' => $password));
        
        return ($query->num_rows == 1) ? TRUE : FALSE;
    }
}
