import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { apiBaseUrl } from '../../../constants';

const ChangePasswordModal = (props) => {

    const [oldPasswd, setOldPasswd] = useState('');
    const [newPasswd, setnewPasswd] = useState('');
    const [newConfirmPasswd, setnewConfirmPasswd] = useState('');

    const handleSubmit = () => {
        if (newPasswd !== newConfirmPasswd) {
            alert("New password and confirm password do not match");
            return;
        }

        if (oldPasswd.length <= 6 || newPasswd.length <= 6) {
            alert("Passwords not long enough. They should be atleast 7 charecters long");
            return;
        }
        const token = localStorage.getItem('token');
        axios.post(apiBaseUrl + '/changePassword', {
            oldPasswd: oldPasswd,
            newPasswd: newPasswd
        }, {
            headers: {
                'Authorization': token
            }
        }).then(response => {
            props.toggleOpen();
        }).catch(err => {
            alert("Could not change password. Check if your old password is right.");
        });
    }


    return (
        <Modal isOpen={props.isOpen} toggle={props.toggleOpen} unmountOnClose={true}>
            <ModalHeader toggle={props.toggleOpen}>Change Password</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="docTitle">Old Password</Label>
                    <Input type="password" value={oldPasswd} onChange={e => setOldPasswd(e.target.value)} placeholder="Old Password" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="docTitle">New Password</Label>
                    <Input type="password" value={newPasswd} onChange={e => setnewPasswd(e.target.value)} placeholder="New Password" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="docTitle">Confirm Password</Label>
                    <Input type="password" value={newConfirmPasswd} onChange={e => setnewConfirmPasswd(e.target.value)} placeholder="Confirm Password" required/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggleOpen}>Cancel</Button>
                <Button color="primary" onClick={handleSubmit}>OK</Button>{' '}
            </ModalFooter>
        </Modal>
    )
}

export default ChangePasswordModal;